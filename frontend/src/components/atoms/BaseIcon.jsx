import { faCheck, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled, { keyframes } from "styled-components";

const pulse = keyframes`
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.05);
    }
    100% {
        transform: scale(1);
    }
`;

export const BaseIcon = styled.button`
  background-color: ${(props) =>
    props.bgColour || props.theme.colours.passiveBgGrey};
  color: ${(props) => props.iconColour || props.theme.colours.passiveIconGrey};
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    animation: ${pulse} 0.8s ease-in-out infinite alternate;
    background-color: ${(props) =>
      props.hoverBgColour || props.theme.colours.hoverBgGrey};
    color: ${(props) =>
      props.hoverIconColour || props.theme.colours.hoverIconGrey};
  }
`;

const CreateTaskIcon = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PlusIcon = ({ isEditing, onClick, ...props }) => (
  <CreateTaskIcon onClick={onClick} {...props}>
    <FontAwesomeIcon
      icon={faPlus}
      size="lg"
      color="white"
      style={{
        transform: isEditing ? "rotate(45deg)" : "rotate(0deg)",
        transition: "transform 0.3s",
        transformOrigin: "center",
      }}
    />
  </CreateTaskIcon>
);

export const CheckIcon = ({ isVisible, onClick, ...props }) => (
  <CreateTaskIcon onClick={onClick} {...props}>
    <FontAwesomeIcon
      icon={faCheck}
      size="lg"
      color="white"
      style={{
        opacity: isVisible ? 1 : 0,
        pointerEvents: isVisible ? "auto" : "none",
      }}
    />
  </CreateTaskIcon>
);
