import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function UserSummary() {
  const { selectedUserId, users } = useContext(AppContext);
  const selectedUser = users.find((user) => user.id === selectedUserId);

  return (
    <div className="profile-box">
      <h3>Обраний користувач</h3>
      <p>{selectedUser ? `${selectedUser.name} — ${selectedUser.role}` : "Користувача не знайдено"}</p>
    </div>
  );
}

function ThemeSwitcher() {
  const { theme, toggleTheme } = useContext(AppContext);

  return (
    <div className="profile-box">
      <p>Поточна тема: <strong>{theme}</strong></p>
      <button onClick={toggleTheme}>Змінити тему</button>
    </div>
  );
}

function ContextDemo() {
  const { users, setSelectedUserId } = useContext(AppContext);

  return (
    <div className="component-card">
      <h3>Демонстрація контексту</h3>
      <p>Дані надходять без пропсів — лише через контекст.</p>
      <div className="students-grid">
        {users.map((user) => (
          <button key={user.id} onClick={() => setSelectedUserId(user.id)}>
            {user.name}
          </button>
        ))}
      </div>
      <ThemeSwitcher />
      <UserSummary />
    </div>
  );
}

export default ContextDemo;
