import { Suspense, use, useState, useOptimistic } from "react";
import { ErrorBoundary } from "react-error-boundary";

import { useActionState } from "react";

import { useFormStatus } from "react-dom";

// Компонент форми для запиту імені користувача
// Компонент, який використовує оптимістичне оновлення
const MessageDemo = ({ state }) => {
  const [optimisticState, addOptimistic] = useOptimistic(
    state,
    (currentState, optimisticValue) => {
      // Оновлюємо стан, додаючи нове значення з прапорцем "sending"
      return [...currentState, { text: optimisticValue, sending: true }];
    },
  );

  return (
    <>
      {optimisticState.map((message, index) => (
        <div key={index}>
          {message.text}
          {message.sending && <small> (Sending...)</small>}{" "}
          {/* Відображаємо стан "Sending" */}
        </div>
      ))}
    </>
  );
};

// Функція, яка повертає структурований результат
// const addToCart = async (previousState, formData) => {
//   const itemID = formData.get("itemID");
//   if (!itemID) {
//     return { success: false, message: "Error: Item ID is missing!" }; // Повертаємо помилку
//   }
//   await new Promise((resolve) => setTimeout(resolve, 1000)); // Імітація затримки
//   return { success: true, cartSize: 5, message: "Item added to cart!" }; // Повертаємо успішний результат
// };

// // Компонент форми
// const MessageDemo = ({ itemID, itemTitle }) => {
//   const [formState, formAction, isPending] = useActionState(addToCart, {});

//   return (
//     <form>
//       <h2>{itemTitle}</h2>
//       <input type="hidden" name="itemID" value={itemID} />
//       <button type="submit" formAction={formAction} disabled={isPending}>
//         {isPending ? "Adding..." : "Add to Cart"}
//       </button>
//       {formState.success && (
//         <div className="toast">{formState.message}</div> // Відображаємо успішне повідомлення
//       )}
//       {formState.success === false && (
//         <div className="error">{formState.message}</div> // Відображаємо помилку
//       )}
//     </form>
//   );
// };

// Функція, яка імітує додавання товару до кошика
// const addToCart = async (previousState, formData) => {
//   const itemID = formData.get("itemID"); // Отримуємо ID товару з форми
//   if (!itemID) {
//     return "Error: Item ID is missing!"; // Повертаємо помилку, якщо ID відсутній
//   }
//   await new Promise((resolve) => setTimeout(resolve, 1000)); // Імітація затримки
//   return `Item ${itemID} added to cart!`; // Повертаємо повідомлення про успіх
// };

// // Компонент форми
// const MessageDemo = ({ itemID, itemTitle }) => {
//   const [message, formAction, isPending] = useActionState(addToCart, null);

//   return (
//     <form>
//       <h2>{itemTitle}</h2>
//       <input type="hidden" name="itemID" value={itemID} />
//       <button type="submit" formAction={formAction} disabled={isPending}>
//         {isPending ? "Adding..." : "Add to Cart"}
//       </button>
//       {message && <p>{message}</p>} {/* Відображаємо повідомлення */}
//     </form>
//   );
// };

// // Функція, яка виконується при відправленні форми
// const increment = async (previousState, formData) => {
//   await new Promise((resolve) => setTimeout(resolve, 1000)); // Імітація затримки
//   console.log(formData);
//   return previousState + 1; // Повертаємо нове значення стану
// };

// // Компонент форми
// const MessageDemo = () => {
//   const [state, formAction, isPending] = useActionState(increment, 0);

//   return (
//     <form>
//       <p>Current state: {state}</p>
//       <input type="text" name="inputField" placeholder="Enter something..." />
//       <button type="submit" formAction={formAction} disabled={isPending}>
//         {isPending ? "Loading..." : "Increment"}
//       </button>
//     </form>
//   );
// };

// const fetchMessage = () => {
//   return fetch("http://api.quotable.io/random")
//     .then((res) => {
//       if (!res.ok) {
//         throw new Error("Failed to load message");
//       }
//       return res.json();
//     })
//     .then((data) => data.content);
// };

// const MessageComponent = ({ messagePromise }) => {
//   const message = use(messagePromise);
//   return <p>{message}</p>;
// };

// const MessageDemo = () => {
//   const [messagePromise, setMessagePromise] = useState(() => fetchMessage());

//   return (
//     <section className="message-demo">
//       <h2>React Suspense + use() Demo</h2>

//       <ErrorBoundary fallback={<p>⚠️ Something went wrong</p>}>
//         <Suspense fallback={<p>Loading message...</p>}>
//           <MessageComponent messagePromise={messagePromise} />
//         </Suspense>
//       </ErrorBoundary>

//       <button onClick={() => setMessagePromise(fetchMessage())}>
//         Load new message
//       </button>
//     </section>
//   );
// };

export default MessageDemo;
