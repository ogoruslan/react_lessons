import { useState } from 'react';

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  // Неправильно: може призвести до втрати оновлень
  const incrementWrong = () => {
    setCount(count + 1);
    setCount(count + 1); // Все ще використовує початкове значення count
  };

  // Правильно: використовує prevState для надійного оновлення
  const incrementRight = () => {
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <h1>Лічильник: {count}</h1>
      <button onClick={incrementWrong}>
        Додати 2 (неправильно)
      </button>
      <button onClick={incrementRight}>
        Додати 2 (правильно)
      </button>
    </div>
  );
};

export default ParentComponent;

// import { useState } from 'react';

// // Батьківський компонент
// const ParentComponent = () => {
//   // Стан та функції його зміни знаходяться в батьківському компоненті
//   const [count, setCount] = useState(0);

//   // Ці функції передаються дочірнім компонентам через props
//   const incrementCount = () => {
//     setCount(count + 1); // Оновлення стану впливає на всі дочірні компоненти
//   };

//   const decrementCount = () => {
//     setCount(count - 1);
//   };

//   return (
//     <div>
//       <h1>Загальний лічильник: {count}</h1>
//       {/* Обидва дочірні компоненти мають доступ до одного стану */}
//       <ChildCounter
//         count={count}
//         onIncrement={incrementCount}
//         label="Перший лічильник"
//       />
//       <ChildCounter
//         count={count}
//         onDecrement={decrementCount}
//         label="Другий лічильник"
//       />
//     </div>
//   );
// };

// // Дочірній компонент
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

