import styled, { ThemeProvider } from "styled-components";
import "./App.css";
import { DateText, GreetingText } from "./components/atoms/TextAtoms";
import TasksListOrganism from "./components/organisms/TaskListOrganism";
import theme from "./theme";

const AppContainer = styled.div`
  background-color: ${(props) => props.theme.colours.pageBg};
  min-height: 100vh;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <GreetingText />
        <DateText />
        <TasksListOrganism />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
