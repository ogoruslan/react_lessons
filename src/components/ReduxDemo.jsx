import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  fetchIncrementAsync,
  increment,
  reset,
} from "../redux/store";

function ReduxDemo() {
  const count = useSelector((state) => state.count);
  const status = useSelector((state) => state.status);
  const error = useSelector((state) => state.error);
  const dispatch = useDispatch();

  return (
    <div className="component-card">
      <h3>Навчальний Redux</h3>
      <p>
        Цей приклад показує, як Redux зберігає стан у одному місці і оновлює
        його через actions.
      </p>
      <p style={{ fontSize: "1.5rem", fontWeight: 700 }}>Значення: {count}</p>
      <p style={{ marginTop: 0, color: "#555" }}>Статус: {status}</p>
      {error && <p style={{ color: "red" }}>Помилка: {error}</p>}
      <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
        <button onClick={() => dispatch(increment())}>+1</button>
        <button onClick={() => dispatch(decrement())}>-1</button>
        <button
          onClick={() => dispatch(fetchIncrementAsync())}
          disabled={status === "loading"}
        >
          Async +1
        </button>
        <button onClick={() => dispatch(reset())}>Скинути</button>
      </div>
    </div>
  );
}

export default ReduxDemo;
