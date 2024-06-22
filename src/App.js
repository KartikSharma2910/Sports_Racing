import { ThemeProvider } from "@mui/material";
import AppRouter from "router/AppRouter";
import theme from "styles/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  );
};

export default App;
