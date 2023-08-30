using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using backend.Models;
using backend.Data;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TasksController : ControllerBase
    {
        private readonly TaskContext _context;

        public TasksController(TaskContext context)
        {
            _context = context;
        }

        // GET: api/Tasks
        [HttpGet]
        public ActionResult<IEnumerable<TaskItem>> GetAllTasks()
        {
            return Ok(_context.Tasks.ToList());
        }

        // GET: api/Tasks/{id}
        [HttpGet("{id}")]
        public ActionResult<TaskItem> GetTaskById(Guid id)
        {
            var task = _context.Tasks.Find(id);
            if (task == null)
            {
                return NotFound();
            }
            return Ok(task);
        }

        // POST: api/Tasks
        [HttpPost]
        public ActionResult<TaskItem> CreateTask([FromBody] CreateTaskRequest request)
        {
            if (string.IsNullOrEmpty(request.Name))
            {
                return BadRequest("Task name should not be empty.");
            }

            var task = new TaskItem { Name = request.Name, Status = request.Status };
            _context.Tasks.Add(task);
            _context.SaveChanges();

            return CreatedAtAction(nameof(GetTaskById), new { id = task.Id }, task);
        }

        // PUT: api/Tasks/{id}
        [HttpPut("{id}")]
        public ActionResult<TaskItem> UpdateTask(Guid id, [FromBody] EditTaskRequest request)
        {
            var task = _context.Tasks.Find(id);

            if (task == null)
            {
                return NotFound();
            }

            if (string.IsNullOrEmpty(request.NewName))
            {
                return BadRequest("Task name should not be empty.");
            }

            task.Name = request.NewName;
            task.Status = request.NewStatus;

            try
            {
                _context.Entry(task).State = EntityState.Modified;
                _context.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!_context.Tasks.Any(e => e.Id == id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Ok(new { message = "Task updated successfully!" });
        }

        // DELETE: api/Tasks/{id}
        [HttpDelete("{id}")]
        public ActionResult<TaskItem> DeleteTask(Guid id)
        {
            var task = _context.Tasks.Find(id);
            if (task == null)
            {
                return NotFound();
            }

            _context.Tasks.Remove(task);
            _context.SaveChanges();

            return Ok(new { message = "Task deleted successfully!" });
        }
    }
}
