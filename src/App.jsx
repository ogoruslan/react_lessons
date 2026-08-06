import { Suspense, lazy, useContext } from "react";
import { NavLink, Outlet, Route, Routes } from "react-router-dom";
import { AppContext } from "./context/AppContext";
import "./App.css";
import BlockerExample from "./components/BlockerExample";
import ContextDemo from "./components/ContextDemo";
import FormStatusExample from "./components/FormStatusExample";
import LifeActComponent from "./components/LifeAct";
import MessageDemo from "./components/MessageDemo";
import ParentComponent from "./components/Parent";
import Thread from "./components/Thread";
import UploadForm from "./components/UploadForm";
import ReduxDemo from "./components/ReduxDemo";
import MyForm from "./components/formik_advanced";
import RegistrationForm from "./components/RegistrationForm";
import FeedbackForm from "./components/FeedbackForm";
import HookFormRegistration from "./components/HookFormRegistration";
import {
  RouteErrorExample,
  ThrowingRouteComponent,
} from "./components/RouteErrorExample";
import {
  AppBar,
  Box,
  Button,
  Container,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";

const LazyExample = lazy(() => import("./components/LazyExample"));

const navItems = [
  ["/", "Мета навчання"],
  ["/example", "Приклад"],
  ["/parent", "Parent"],
  ["/messages", "Messages"],
  ["/upload", "Upload"],
  ["/form-status", "Form Status"],
  ["/examples", "Examples"],
  ["/route-error", "Route Error"],
  ["/thread", "Thread"],
  ["/lazy", "Lazy"],
  ["/redux", "Redux"],
  ["/formik-advanced", "Formik Advanced"],
  ["/register", "Registration"],
  ["/feedback", "Feedback"],
  ["/hook-form", "Hook Form"],
];

function NavButton({ to, label }) {
  return (
    <Button
      component={NavLink}
      to={to}
      variant="text"
      sx={{
        color: "common.white",
        textTransform: "none",
        fontWeight: 600,
        '&.active': {
          color: "secondary.main",
        },
      }}
    >
      {label}
    </Button>
  );
}

function HomePage() {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Мета навчання студентів
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Цей проєкт допомагає студентам зрозуміти основи React через практичні
        приклади.
      </Typography>
      <Box sx={{ mb: 3 }}>
        <Typography component="ul" sx={{ pl: 3, color: "text.primary" }}>
          <li>Освоїти компоненти та props.</li>
          <li>Навчитися працювати зі станом та ефектами.</li>
          <li>Розуміти, як будувати прості UI-інтеракції.</li>
          <li>Побачити, як React допомагає структурувати навчальні приклади.</li>
        </Typography>
      </Box>
      <Box>
        <ContextDemo />
      </Box>
    </Box>
  );
}

function ExamplePage() {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Приклад React-компонента
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        На цій сторінці показано приклад роботи з життєвим циклом компонента.
      </Typography>
      <LifeActComponent id={1} />
    </Box>
  );
}

function NotFound() {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Сторінка не знайдена
      </Typography>
      <Typography variant="body1">
        Вибачте, але сторінка, яку ви шукаєте, не існує.
      </Typography>
    </Box>
  );
}

function ExamplesLayout() {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Приклади React Router
      </Typography>
      <Stack direction="row" flexWrap="wrap" spacing={1} sx={{ mb: 3 }}>
        <NavButton to="/examples/blocker" label="useBlocker" />
        <NavButton to="/examples/child" label="Дочірній маршрут" />
      </Stack>
      <Box>
        <Outlet />
      </Box>
    </Box>
  );
}

function App() {
  const { theme } = useContext(AppContext);

  return (
    <Box
      className="app-shell"
      sx={{
        bgcolor: theme === "dark" ? "grey.950" : "grey.100",
        color: theme === "dark" ? "grey.100" : "text.primary",
        minHeight: "100vh",
      }}
    >
      <AppBar position="static" color="primary">
        <Toolbar sx={{ flexWrap: "wrap", justifyContent: "center", gap: 1 }}>
          <Typography variant="h6" sx={{ flexGrow: 1, minWidth: 180, color: "common.white" }}>
            React Lessons
          </Typography>
          <Stack direction="row" flexWrap="wrap" spacing={0.5}>
            {navItems.map(([to, label]) => (
              <NavButton key={to} to={to} label={label} />
            ))}
          </Stack>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/example" element={<ExamplePage />} />
          <Route
            path="/parent"
            element={
              <Box sx={{ mb: 4 }}>
                <ParentComponent />
              </Box>
            }
          />
          <Route
            path="/messages"
            element={
              <Box sx={{ mb: 4 }}>
                <MessageDemo />
              </Box>
            }
          />
          <Route
            path="/upload"
            element={
              <Box sx={{ mb: 4 }}>
                <UploadForm />
              </Box>
            }
          />
          <Route
            path="/form-status"
            element={
              <Box sx={{ mb: 4 }}>
                <FormStatusExample />
              </Box>
            }
          />
          <Route
            path="/thread"
            element={
              <Box sx={{ mb: 4 }}>
                <Thread />
              </Box>
            }
          />
          <Route
            path="/redux"
            element={
              <Box sx={{ mb: 4 }}>
                <ReduxDemo />
              </Box>
            }
          />
          <Route
            path="/formik-advanced"
            element={
              <Box sx={{ mb: 4 }}>
                <MyForm />
              </Box>
            }
          />
          <Route
            path="/register"
            element={
              <Box sx={{ mb: 4 }}>
                <RegistrationForm />
              </Box>
            }
          />
          <Route
            path="/feedback"
            element={
              <Box sx={{ mb: 4 }}>
                <FeedbackForm />
              </Box>
            }
          />
          <Route
            path="/hook-form"
            element={
              <Box sx={{ mb: 4 }}>
                <HookFormRegistration />
              </Box>
            }
          />
          <Route path="/examples" element={<ExamplesLayout />}>
            <Route index element={<BlockerExample />} />
            <Route path="blocker" element={<BlockerExample />} />
            <Route
              path="child"
              element={
                <Box sx={{ p: 3, borderRadius: 2, bgcolor: "background.paper", boxShadow: 1 }}>
                  <Typography variant="h5" gutterBottom>
                    Вкладений маршрут
                  </Typography>
                  <Typography>Це демонстрація дочірнього маршруту.</Typography>
                </Box>
              }
            />
          </Route>
          <Route path="/route-error" element={<RouteErrorExample />} />
          <Route path="/route-error/throw" element={<ThrowingRouteComponent />} />
          <Route
            path="/lazy"
            element={
              <Suspense
                fallback={
                  <Box sx={{ p: 4, bgcolor: "background.paper", borderRadius: 2, boxShadow: 1 }}>
                    <Typography>Завантаження компонента...</Typography>
                  </Box>
                }
              >
                <LazyExample />
              </Suspense>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </Box>
  );
}

export default App;
