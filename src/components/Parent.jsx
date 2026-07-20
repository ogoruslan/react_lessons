import { useState } from "react";

function ParentComponent() {
  const [isOpen, setIsOpen] = useState(true);
  const [likes, setLikes] = useState(0);

  return (
    <div className="component-card">
      <h3>Батьківський компонент</h3>
      <p>Цей приклад показує, як стан і події працюють у батьківському компоненті.</p>

      <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
        <button onClick={() => setIsOpen((prev) => !prev)}>
          {isOpen ? "Сховати" : "Показати"} профіль
        </button>
        <button onClick={() => setLikes((prev) => prev + 1)}>
          Лайків: {likes}
        </button>
      </div>

      {isOpen && (
        <div className="profile-box">
          <h4>Профіль користувача</h4>
          <p>Ім&apos;я: Олександр</p>
          <p>Курс: React для початківців</p>
          <p>Статус: вивчає state та props</p>
        </div>
      )}
    </div>
  );
}

export default ParentComponent;

// const ChildCounter = ({ count, onIncrement, onDecrement, label }) => {
//   return (
//     <div>
//       <h2>{label}: {count}</h2>
//       {onIncrement && (
//         <button onClick={onIncrement}>Збільшити</button>
//       )}
//       {onDecrement && (
//         <button onClick={onDecrement}>Зменшити</button>
//       )}
//     </div>
//   );
// };

// export default ParentComponent;
