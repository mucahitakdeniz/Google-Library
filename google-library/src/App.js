import AppRouter from "./router/AppRouter";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/theme";
import { GlobalStles } from "./styles/Global.styles";
import { useThemeContext } from "./context/ThemeContext";
import AuthContextProvider from "./context/AuthContext";

function App() {
  const { myTheme } = useThemeContext();
  const themes = myTheme === "light" ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={themes}>
      <GlobalStles />
      <AuthContextProvider>
        <AppRouter />
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default App;
