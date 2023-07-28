import AppRouter from "./router/AppRouter";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/theme";
import { GlobalStles } from "./styles/Global.styles";
import { useThemeContext } from "./context/ThemeContext";

function App() {
  const { myTheme } = useThemeContext();
  const themes = myTheme === "light" ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={themes}>
      <GlobalStles />
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
