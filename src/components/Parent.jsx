import { useState, useEffect } from "react";
import { useRef } from "react";

const ParentComponent = () => {
  // const UserProfile = () => {
  // useEffect(() => {
  //   // Код, що виконується при монтуванні
  //   console.log("Компонент UserProfile монтується");

  //   // Функція очищення, що виконується при відмонтовуванні
  //   return () => {
  //     console.log("Компонент UserProfile відмонтовується");
  //     // Тут може бути код очищення ресурсів
  //   };
  // }, []); // Ефект виконується один раз при монтуванні

  return <h1>Профіль користувача</h1>;
};

// const FetchDataComponent = () => {
// Стан для збереження отриманих даних
//     const [data, setData] = useState(null);
//     // Стан для збереження помилок
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 // Запит до API
//                 const response = await fetch('<https://api.example.com/data>');

//                 // Перевірка успішності відповіді
//                 if (!response.ok) {
//                     throw new Error('Помилка отримання даних');
//                 }

//                 // Обробка отриманих даних
//                 const result = await response.json();
//                 setData(result);
//             } catch (err) {
//                 // Збереження тексту помилки
//                 setError(err.message);
//             }
//         };

//         // Виклик функції отримання даних
//         fetchData();
//     }, []); // Ефект виконується один раз при монтуванні

//     return (
//         <div>
//             {/* Відображення помилки за наявності */}
//             {error && <p>Сталася помилка: {error}</p>}

//             {/* Відображення даних або стану завантаження */}
//             {data ? (
//                 <div>{JSON.stringify(data)}</div>
//             ) : (
//                 <p>Дані завантажуються...</p>
//             )}
//         </div>
//     );
// };

// const LikeCounter = () => {
// Стан для збереження кількості лайків
//     const [likes, setLikes] = useState(0);
//     // Стан для збереження повідомлення
//     const [message, setMessage] = useState('');

//     useEffect(() => {
//         // Ефект виконується при зміні кількості лайків
//         console.log(`Кількість лайків змінилася на ${likes}`);
//         setMessage(`Віддано ${likes} лайків`);
//     }, []); // Залежність від змінної likes

//     // Обробник кліку для збільшення лайків
//     const handleLikeClick = () => setLikes(likes + 1);

//     return (
//         <div>
//             <button onClick={handleLikeClick}>Лайк</button>
//             <p>{message}</p>
//         </div>
//     );
// };

// const UserData = () => {
// Створення стану для збереження даних користувача
//     const [user, setUser] = useState(null);

//     // Виконання запиту до API після монтування компонента
//     useEffect(() => {
//         // Функція для отримання даних
//         const fetchData = async () => {
//             try {
//                 const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
//                 const data = await response.json();
//                 setUser(data); // Збереження отриманих даних
//             } catch (error) {
//                 console.error('Помилка отримання даних:', error);
//             }
//         };

//         fetchData();
//     }, []); // Пустий масив залежностей - ефект виконається один раз

//     return (
//         <>
//             {user ? (
//                 // Відображення даних користувача
//                 <div>
//                     <p>Ім'я: {user.name}</p>
//                     <p>Email: {user.email}</p>
//                 </div>
//             ) : (
//                 // Відображення стану завантаження
//                 <p>Завантаження даних користувача...</p>
//             )}
//         </>
//     );
// };

// const ControlledComponent = () => {
// Створення стану для зберігання значення поля вводу
//   const [value, setValue] = useState('default value');

//   // Обробник події зміни значення поля
//   const handleChange = (event) => {
//     setValue(event.target.value);
//   };

//   // Обробник відправки форми
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Обробка даних форми
//     console.log('Відправлене значення:', value);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Ім'я:
//         {/* Прив'язка значення поля до стану та обробника події */}
//         <input
//           type="text"
//           value={value}
//           onChange={handleChange}
//         />
//       </label>
//       <button type="submit">Надіслати</button>
//     </form>
//   );
// };

// const UncontrolledComponent = () => {
//   const inputRef = useRef(null); // Створення ref для доступу до input

//   const handleSubmit = (event) => {
//     event.preventDefault(); // Запобігання перезавантаженню сторінки
//     alert('Введене ім\'я: ' + inputRef.current.value); // Отримання значення через ref
//     console.log(inputRef);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Ім'я:
//         <input type="text" ref={inputRef} /> {/* Прив'язка ref до input */}
//       </label>
//       <button type="submit">Надіслати</button>
//     </form>
//   );
// };

//   const handleSubmit = (event) => {
//     event.preventDefault(); // Запобігання перезавантаженню сторінки
//     const enteredName = event.target.elements.name.value; // Отримання значення поля
//     console.log(event);
//     alert('Введене ім\'я: ' + enteredName);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Ім'я:
//         <input type="text" name="name" />
//       </label>
//       <button type="submit">Надіслати</button>
//     </form>
//   );
// };

export default ParentComponent;

// const ParentComponent = () => {
//   const [count, setCount] = useState(0);

//   // Неправильно: може призвести до втрати оновлень
//   const incrementWrong = () => {
//     setCount(count + 1);
//     setCount(count + 1); // Все ще використовує початкове значення count
//   };

//   // Правильно: використовує prevState для надійного оновлення
//   const incrementRight = () => {
//     setCount(prevCount => prevCount + 1);
//     setCount(prevCount => prevCount + 1);
//   };

//   return (
//     <div>
//       <h1>Лічильник: {count}</h1>
//       <button onClick={incrementWrong}>
//         Додати 2 (неправильно)
//       </button>
//       <button onClick={incrementRight}>
//         Додати 2 (правильно)
//       </button>
//     </div>
//   );
// };

// export default ParentComponent;

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
