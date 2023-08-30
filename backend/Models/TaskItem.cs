namespace backend.Models;

public class TaskItem
{
    public Guid Id { get; set; } = Guid.NewGuid(); // Unique identifier when task is created
    public string Name { get; set; }
    public string Status { get; set; } // Not Started, In Progress, Completed
}
