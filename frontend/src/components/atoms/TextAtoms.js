import { styled } from "styled-components";
import {
  ConfirmationFont,
  HeadingFont,
  SubHeadingFont,
  SubHeadingLightFont,
} from "./StyledFont";
import content from "./TextContent.json";

function replacePlaceholders(template, values) {
  let result = template;
  for (const [key, value] of Object.entries(values)) {
    result = result.replace(`{{${key}}}`, value);
  }
  return result;
}

function getPeriod(hour) {
  if (hour >= 5 && hour < 12) return "Morning";
  if (hour >= 12 && hour < 17) return "Afternoon";
  if (hour >= 17 && hour < 21) return "Evening";
  return "Night";
}

const today = new Date();
const period = getPeriod(today.getHours());

const dayList = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const day = dayList[today.getDay()];

const replacements = {
  period: period,
  day: day,
  date: today.getDate(),
  month: today.toLocaleString("default", { month: "long" }),
  year: today.getFullYear(),
};

const GreetingWrapper = styled.div`
  padding: 2em 0 0 3em;
`;

const DateWrapper = styled.div`
  padding: 0em 0 0 3em;
`;

export const GreetingText = () => {
  return (
    <GreetingWrapper>
      <HeadingFont>
        {replacePlaceholders(content.greeting, replacements)}
      </HeadingFont>
    </GreetingWrapper>
  );
};

export const DateText = () => {
  return (
    <DateWrapper>
      <SubHeadingLightFont>
        {replacePlaceholders(content.date, replacements)}
      </SubHeadingLightFont>
    </DateWrapper>
  );
};

export const CreateTaskText = () => {
  return <SubHeadingFont>{content.createTask}</SubHeadingFont>;
};

export const EditTaskText = () => {
  return <SubHeadingFont>{content.editTaskName}</SubHeadingFont>;
};

export const ConfirmDeleteText = () => {
  return <ConfirmationFont>{content.confirmDelete}</ConfirmationFont>;
};

export const KeepText = () => {
  return <ConfirmationFont>{content.keep}</ConfirmationFont>;
};

export const RemoveText = () => {
  return <ConfirmationFont>{content.remove}</ConfirmationFont>;
};
