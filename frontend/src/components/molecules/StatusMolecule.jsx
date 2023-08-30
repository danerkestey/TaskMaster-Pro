import {
  faCheck,
  faExclamation,
  faHourglassHalf,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import styled, { useTheme } from "styled-components";
import StatusIconButton from "./StatusIconButton";

const StatusContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5em;
  margin-right: 1em;
`;

const StatusMolecule = ({ activeStatus, onStatusChange }) => {
  const theme = useTheme();

  return (
    <StatusContainer>
      <StatusIconButton
        icon={faCheck}
        onClick={() => onStatusChange("Completed")}
        bgColour={
          activeStatus === "Completed"
            ? theme.colours.hoverBgGreen
            : theme.colours.passiveBgGrey
        }
        iconColour={
          activeStatus === "Completed"
            ? theme.colours.hoverIconGreen
            : theme.colours.passiveIconGrey
        }
        hoverBgColour={theme.colours.hoverBgGreen}
        hoverIconColour={theme.colours.hoverIconGreen}
      />

      <StatusIconButton
        icon={faHourglassHalf}
        onClick={() => onStatusChange("In Progress")}
        bgColour={
          activeStatus === "In Progress"
            ? theme.colours.hoverBgYellow
            : theme.colours.passiveBgGrey
        }
        iconColour={
          activeStatus === "In Progress"
            ? theme.colours.hoverIconYellow
            : theme.colours.passiveIconGrey
        }
        hoverBgColour={theme.colours.hoverBgYellow}
        hoverIconColour={theme.colours.hoverIconYellow}
      />

      <StatusIconButton
        icon={faExclamation}
        onClick={() => onStatusChange("Not Started")}
        bgColour={
          activeStatus === "Not Started"
            ? theme.colours.hoverBgRed
            : theme.colours.passiveBgGrey
        }
        iconColour={
          activeStatus === "Not Started"
            ? theme.colours.hoverIconRed
            : theme.colours.passiveIconGrey
        }
        hoverBgColour={theme.colours.hoverBgRed}
        hoverIconColour={theme.colours.hoverIconRed}
      />
    </StatusContainer>
  );
};

export default StatusMolecule;
