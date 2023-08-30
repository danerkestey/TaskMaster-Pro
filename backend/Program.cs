using Microsoft.EntityFrameworkCore;
using Microsoft.Data.Sqlite;
using backend.Data;

var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddCors(options =>
{
    options.AddPolicy(
        name: MyAllowSpecificOrigins,
        policy =>
        {
            policy
                .WithOrigins(
                    "http://localhost:3000",
                    "https://localhost:3000",
                    "http://localhost:5065",
                    "https://localhost:5065"
                )
                .AllowAnyMethod()
                .AllowAnyHeader();
        }
    );
});
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Register the database context using an in-memory database.
var connection = new SqliteConnection("DataSource=:memory:");
connection.Open();
builder.Services.AddDbContext<TaskContext>(options => options.UseSqlite(connection));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

Console.WriteLine("before database creation");

// Ensure the in-memory database is created:
using (var scope = app.Services.CreateScope())
{
    var services = scope.ServiceProvider;
    var context = services.GetRequiredService<TaskContext>();
    context.Database.EnsureCreated();
}
Console.WriteLine("after database creation");

app.UseCors(MyAllowSpecificOrigins);
app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

app.Run();
