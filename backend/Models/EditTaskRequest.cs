namespace backend.Models;

public class EditTaskRequest
{
    public string NewName { get; set; }
    public string NewStatus { get; set; } // Not Started, In Progress, Completed
}
