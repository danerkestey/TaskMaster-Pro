import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { BaseIcon } from "../atoms/BaseIcon";

const StatusIconButton = ({ icon, ...props }) => {
  return (
    <BaseIcon {...props}>
      <FontAwesomeIcon icon={icon} size="xl" />
    </BaseIcon>
  );
};

export default StatusIconButton;
