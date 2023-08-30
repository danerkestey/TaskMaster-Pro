import React from "react";
import styled from "styled-components";
import { CheckIcon, PlusIcon } from "../atoms/BaseIcon";
import { SubHeadingFont, baseStyle, weight } from "../atoms/StyledFont";
import { CreateTaskText } from "../atoms/TextAtoms";

const ButtonContainer = styled.button`
  background-color: ${(props) => props.theme.colours.black};
  color: ${(props) => props.theme.colours.white};
  border-radius: 30px;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  border: none;
  width: 35em;
  height: 5em;
  justify-content: space-between;
`;

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  input {
    border: none;
    background: none;
    color: ${(props) => props.theme.colours.white};
    font-size: 1em;
    outline: none;
  }
`;

const StyledInput = styled.input`
  ${baseStyle}
  font-weight: ${weight.medium};
  font-size: 1.5em;
  color: ${(props) => props.theme.colours.white};
  background: none;
  border: none;
  outline: none;

  ::placeholder {
    color: grey;
  }
`;

const Spacer = styled.div`
  flex: 1;
`;

const NewTaskMolecule = ({ onToggle, onInputChange, onTaskAdded }) => {
  const [isEditing, setIsEditing] = React.useState(false);
  const [taskName, setTaskName] = React.useState("");

  const onTaskSubmit = async () => {
    const response = await fetch("http://localhost:5065/api/Tasks", {
      method: "POST",
      body: JSON.stringify({ name: taskName, status: "Not Started" }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const newTask = await response.json();
    setIsEditing(false);
    setTaskName("");

    onTaskAdded(newTask);
  };

  return (
    <ButtonContainer onClick={isEditing ? null : () => setIsEditing(true)}>
      {isEditing ? (
        <>
          <PlusIcon isEditing={isEditing} onClick={() => setIsEditing(false)} />
          <TextContainer>
            {isEditing ? (
              <StyledInput
                type="text"
                placeholder="Edit Task Name"
                onChange={(e) => setTaskName(e.target.value)}
              />
            ) : (
              <SubHeadingFont>{taskName}</SubHeadingFont>
            )}
          </TextContainer>
          <CheckIcon isVisible={isEditing} onClick={() => onTaskSubmit()} />
        </>
      ) : (
        <>
          <PlusIcon />
          <Spacer />
          <CreateTaskText />
          <Spacer />
        </>
      )}
    </ButtonContainer>
  );
};

export default NewTaskMolecule;
