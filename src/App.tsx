import {
  Container,
  createTheme,
  CssBaseline,
  Stack,
  ThemeProvider,
} from "@mui/material";
import { Provider } from "react-redux";
import { globalStore } from "./store";
import EventListPage from "./views/events";
import SettingFormPage from "./views/settings";

const theme = createTheme({
  palette: { mode: "dark" },
});

function App() {
  return (
    <Provider store={globalStore}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="md">
          <Stack spacing={4}>
            <SettingFormPage />

            <EventListPage />
          </Stack>
        </Container>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
