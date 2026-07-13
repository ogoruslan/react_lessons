import { useOptimistic, useState, useRef } from 'react';

// Компонент для відправлення повідомлень
const Thread = ({ messages, sendMessage }) => {
  const formRef = useRef();

  // Функція для обробки відправлення форми
  const formAction = async (formData) => {
    const message = formData.get('message'); // Отримуємо текст повідомлення
    addOptimisticMessage(message); // Оптимістично оновлюємо інтерфейс
    formRef.current.reset(); // Очищуємо поле вводу
    await sendMessage(formData); // Відправляємо повідомлення на сервер
  };

  // Оптимістичне оновлення стану повідомлень
  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    messages,
    (state, newMessage) => [
      ...state,
      { text: newMessage, sending: true }, // Додаємо нове повідомлення з прапорцем "sending"
    ]
  );

  return (
    <>
      {optimisticMessages.map((message, index) => (
        <div key={index}>
          {message.text}
          {message.sending && <small> (Sending...)</small>} {/* Відображаємо стан "Sending" */}
        </div>
      ))}
      <form action={formAction} ref={formRef}>
        <input type="text" name="message" placeholder="Hello!" />
        <button type="submit">Send</button>
      </form>
    </>
  );
};



export default Thread;