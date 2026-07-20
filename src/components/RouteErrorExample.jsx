import { Link, useRouteError } from "react-router-dom";

function RouteErrorExample() {
  const error = useRouteError();

  return (
    <section className="page-card">
      <h2>useRouteError</h2>
      <p className="page-intro">
        Цей приклад показує, як React Router ловить помилки маршруту та передає їх у компонент
        через hook useRouteError.
      </p>

      <div className="error-box">
        <p>
          <strong>Тип помилки:</strong> {error?.name || "UnknownError"}
        </p>
        <p>
          <strong>Повідомлення:</strong> {error?.message || "Невідома помилка"}
        </p>
        {error?.stack ? <pre>{error.stack}</pre> : null}
      </div>

      <Link to="/" className="nav-link">
        Повернутися на головну
      </Link>
    </section>
  );
}

function ThrowingRouteComponent() {
  throw new Error("Симуляція помилки з маршруту");
}

export { RouteErrorExample, ThrowingRouteComponent };
export default RouteErrorExample;
