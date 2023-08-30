import React, { useState } from "react";
import { CreateTaskText, EditTaskText } from "../atoms/TextAtoms";
import NewTaskMolecule from "../molecules/NewTaskMolecule";

const CreateNewTaskOrganism = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [taskName, setTaskName] = useState(CreateTaskText);

  const handleToggle = () => {
    setIsEditing((prev) => !prev);
    setTaskName(isEditing ? CreateTaskText : EditTaskText);
  };

  const handleInputChange = (value) => {
    setTaskName(value);
  };

  const handleSubmit = (value) => {
    if (value) {
      console.log("Task submitted:", value);
      setIsEditing(false);
      setTaskName(CreateTaskText);
      // rest of POST logic
    }
  };

  return (
    <NewTaskMolecule
      onToggle={handleToggle}
      text={taskName}
      onInputChange={handleInputChange}
      onTaskSubmit={handleSubmit}
    />
  );
};

export default CreateNewTaskOrganism;
