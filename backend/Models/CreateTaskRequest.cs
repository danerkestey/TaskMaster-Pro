namespace backend.Models;

public class CreateTaskRequest
{
    public string Name { get; set; }
    public string Status { get; set; } // Not Started, In Progress, Completed
}
