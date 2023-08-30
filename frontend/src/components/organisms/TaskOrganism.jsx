import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import styled, { useTheme } from "styled-components";
import { baseStyle, weight } from "../atoms/StyledFont";
import { ConfirmDeleteText } from "../atoms/TextAtoms";
import { KeepButton, RemoveButton } from "../atoms/TextButtonAtoms";
import StatusIconButton from "../molecules/StatusIconButton";
import StatusMolecule from "../molecules/StatusMolecule";

const modalStyles = {
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "20px",
    backgroundColor: "transparent",
    border: "none",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 1em;
`;

const DeleteWrapper = styled.div`
  display: flex;
  flex-shrink: 0; // prevents the delete button from shrinking
  margin-left: 1em; // adds a gap between the task name and the delete button
`;

Modal.setAppElement("#root");

const TaskContainer = styled.div`
  background-color: white;
  border-radius: 20px;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  justify-content: space-between;
  width: 80%;
  padding: 1em;
  margin: 1em auto; // centers the task on the screen
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); // light shadow
`;

const StyledInput = styled.input`
  ${baseStyle}
  font-weight: ${weight.medium};
  font-size: 1.5em;
  color: ${(props) => props.theme.colours.black};
  background: none;
  border: none;
  outline: none;

  ::placeholder {
    color: ${(props) => props.theme.colours.black};
    opacity: 1;
  }
`;

const TaskOrganism = ({ taskId, onTaskDeleted }) => {
  const theme = useTheme();

  const [taskDetails, setTaskDetails] = useState({ name: "Loading..." });
  const [activeStatus, setActiveStatus] = useState("");
  const [modalIsOpen, setIsOpen] = React.useState(false);

  useEffect(() => {
    fetch(`http://localhost:5065/api/Tasks/${taskId}`)
      .then((response) => response.json())
      .then((data) => {
        setTaskDetails({ ...data });
        setActiveStatus(data.status);
      })
      .catch((error) => console.error("Error fetching task details:", error));
  }, [taskId]);

  const handleStatusChange = (status) => {
    setActiveStatus(status);
    setTaskDetails({ ...taskDetails, status: status });
    fetch(`http://localhost:5065/api/Tasks/${taskId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        newName: taskDetails.name,
        newStatus: status,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data.message))
      .catch((error) => console.error("Error updating task status:", error));
  };

  const handleNameChange = (name) => {
    setTaskDetails({ ...taskDetails, name: name });

    fetch(`http://localhost:5065/api/Tasks/${taskId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        newName: name,
        newStatus: taskDetails.status,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data.message))
      .catch((error) => console.error("Error updating task status:", error));
  };

  const handleDelete = () => {
    fetch(`http://localhost:5065/api/Tasks/${taskId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message);
        onTaskDeleted(taskId);
      })
      .catch((error) => console.error("Error deleting task:", error));
  };

  const onDeleteClicked = () => {
    setIsOpen(true);
  };

  return (
    <TaskContainer>
      <Modal
        isOpen={modalIsOpen}
        style={modalStyles}
        contentLabel="Confirm Task Deletion"
      >
        <ConfirmDeleteText />
        <ButtonWrapper>
          <KeepButton onClick={() => setIsOpen(false)} />
          <RemoveButton
            onClick={() => {
              setIsOpen(false);
              handleDelete();
            }}
          />
        </ButtonWrapper>
      </Modal>

      <StatusMolecule
        activeStatus={activeStatus}
        onStatusChange={handleStatusChange}
      />

      <StyledInput
        type="text"
        disabled={taskDetails.status == "Completed"}
        placeholder={taskDetails.name}
        onBlur={(e) => {
          handleNameChange(e.target.value);
          e.target.value = "";
        }}
      />

      <DeleteWrapper>
        <StatusIconButton
          icon={faTrashAlt}
          onClick={onDeleteClicked}
          bgColour={theme.colours.passiveBgGrey}
          iconColour={theme.colours.passiveIconGrey}
          hoverBgColour={theme.colours.hoverBgRed}
          hoverIconColour={theme.colours.hoverIconRed}
        />
      </DeleteWrapper>
    </TaskContainer>
  );
};

export default TaskOrganism;
