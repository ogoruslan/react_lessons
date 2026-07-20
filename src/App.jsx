import { Suspense, lazy } from "react";
import { NavLink, Outlet, Route, Routes, useLocation } from "react-router-dom";

import "./App.css";
import BlockerExample from "./components/BlockerExample";
import FormStatusExample from "./components/FormStatusExample";
import LifeActComponent from "./components/LifeAct";
import MessageDemo from "./components/MessageDemo";
import ParentComponent from "./components/Parent";
import Thread from "./components/Thread";
import UploadForm from "./components/UploadForm";
import { RouteErrorExample, ThrowingRouteComponent } from "./components/RouteErrorExample";

const LazyExample = lazy(() => import("./components/LazyExample"));

function HomePage() {
  return (
    <section className="page-card">
      <h1>Мета навчання студентів</h1>
      <p className="page-intro">
        Цей проєкт допомагає студентам зрозуміти основи React через практичні приклади.
      </p>
      <ul className="goals-list">
        <li>Освоїти компоненти та props.</li>
        <li>Навчитися працювати зі станом та ефектами.</li>
        <li>Розуміти, як будувати прості UI-інтеракції.</li>
        <li>Побачити, як React допомагає структурувати навчальні приклади.</li>
      </ul>
    </section>
  );
}

function ExamplePage() {
  return (
    <section className="page-card">
      <h2>Приклад React-компонента</h2>
      <p className="page-intro">
        На цій сторінці показано приклад роботи з життєвим циклом компонента.
      </p>
      <LifeActComponent id={1} />
    </section>
  );
}

function NotFound() {
  return (
    <section className="page-card">
      <h1>Сторінка не знайдена</h1>
      <p>Вибачте, але сторінка, яку ви шукаєте, не існує.</p>
    </section>
  );
}

function ExamplesLayout() {
  return (
    <section className="page-card">
      <h2>Приклади React Router</h2>
      <nav className="sub-nav">
        <NavLink to="/examples/blocker" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
          useBlocker
        </NavLink>
        <NavLink to="/examples/child" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
          Дочірній маршрут
        </NavLink>
      </nav>
      <Outlet />
    </section>
  );
}

function App() {
  const location = useLocation();
  console.log("Current location:", location);
  return (
    <div className="app-shell">
      <nav className="top-nav">
        <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
          Мета навчання
        </NavLink>
        <NavLink to="/example" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
          Приклад
        </NavLink>
        <NavLink to="/parent" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
          Parent
        </NavLink>
        <NavLink to="/messages" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
          Messages
        </NavLink>
        <NavLink to="/upload" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
          Upload
        </NavLink>
        <NavLink to="/form-status" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
          Form Status
        </NavLink>
        <NavLink to="/examples" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
          Examples
        </NavLink>
        <NavLink to="/route-error" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
          Route Error
        </NavLink>
        <NavLink to="/thread" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
          Thread
        </NavLink>
        <NavLink to="/lazy" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
          Lazy
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/example" element={<ExamplePage />} />
        <Route path="/parent" element={<section className="page-card"><ParentComponent /></section>} />
        <Route path="/messages" element={<section className="page-card"><MessageDemo /></section>} />
        <Route path="/upload" element={<section className="page-card"><UploadForm /></section>} />
        <Route path="/form-status" element={<section className="page-card"><FormStatusExample /></section>} />
        <Route path="/thread" element={<section className="page-card"><Thread /></section>} />
        <Route path="/examples" element={<ExamplesLayout />}>
          <Route index element={<BlockerExample />} />
          <Route path="blocker" element={<BlockerExample />} />
          <Route path="child" element={<div className="component-card"><h3>Вкладений маршрут</h3><p>Це демонстрація дочірнього маршруту.</p></div>} />
        </Route>
        <Route path="/route-error" element={<RouteErrorExample />} />
        <Route path="/route-error/throw" element={<ThrowingRouteComponent />} />
        <Route
          path="/lazy"
          element={
            <Suspense fallback={<div className="page-card"><p>Завантаження компонента...</p></div>}>
              <LazyExample />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
      
    </div>
  );
}

export default App;
