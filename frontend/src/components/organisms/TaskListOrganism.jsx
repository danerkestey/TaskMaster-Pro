import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TaskOrganism from "./TaskOrganism";
import NewTaskMolecule from "../molecules/NewTaskMolecule";

const TaskListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em; //  gap between each task
  max-width: 150em; // This limits the width on wider screens
  margin: 0 auto; // This centers the container

  @media (min-width: 768px) {
    // From tablet and up
    padding: 1em;
  }
`;

const TasksListOrganism = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5065/api/Tasks")
      .then((response) => response.json())
      .then((data) => {
        setTasks(data);
      })
      .catch((error) => console.error("Error fetching tasks:", error));
  }, []);

  const handleTaskDeleted = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const handleTaskAdded = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <TaskListContainer>
      {tasks.map((task) => (
        <TaskOrganism
          key={task.id}
          taskId={task.id}
          onTaskDeleted={handleTaskDeleted}
        />
      ))}
      <NewTaskMolecule onTaskAdded={handleTaskAdded} />
    </TaskListContainer>
  );
};

export default TasksListOrganism;
