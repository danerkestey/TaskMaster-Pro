import React from "react";
import styled from "styled-components";
import { KeepText, RemoveText } from "./TextAtoms";

const StyledKeepButton = styled.button`
  background-color: ${(props) => props.theme.colours.babyBlue};
  color: ${(props) => props.theme.colours.white};
  border: none;
  padding: 1em 3em;
  border-radius: 20px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
`;

const StyledRemoveButton = styled.button`
  background-color: transparent;
  color: ${(props) => props.theme.colours.red};
  border: none;
  padding: 1em 3em;
  cursor: pointer;
  transition: 0.5s ease-in-out;
`;

export const KeepButton = ({ onClick }) => (
  <StyledKeepButton onClick={onClick}>
    <KeepText />
  </StyledKeepButton>
);

export const RemoveButton = ({ onClick }) => (
  <StyledRemoveButton onClick={onClick}>
    <RemoveText />
  </StyledRemoveButton>
);
