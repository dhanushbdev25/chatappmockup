import { createTheme, ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";

import "./App.css";
import Mainscreen from "./Mainscreen";
import { store } from "./StateManagement/Store";
function App() {
  const theme = createTheme({
    components: {
      MuiAccordion: {
        styleOverrides: {
          root: {
            boxShadow: "none",
          },
        },
      },
      MuiButton: {
        styleOverrides: { root: { textTransform: "none" } },
      },
      MuiPaper: {
        styleOverrides: {
          root: { borderRadius: "15px" },
          elevation4: {
            boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.05)",
          },
        },
      },
    },
  });
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <div>
          <Mainscreen />
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
