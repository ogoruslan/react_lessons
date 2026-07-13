import { useState } from "react";

import "./App.css";

import Students from "./components/Students";
import Parent from "./components/Parent";
import MessageDemo from "./components/MessageDemo";
import UploadForm from "./components/UploadForm";
import FormStatusExample from "./components/FormStatusExample";
import Thread from "./components/Thread";

const students = [
  { id: 1, name: "Alice Johnson", subject: "Mathematics", grade: "A" },
  { id: 2, name: "Brian Smith", subject: "Science", grade: "B+" },
  { id: 3, name: "Chloe Davis", subject: "English", grade: "A-" },
];

function App() {
  const [showProfile, setShowProfile] = useState(true);

  // Обробник зміни стану відображення
  const toggleProfile = () => setShowProfile(!showProfile);
  const [messages, setMessages] = useState([
    { text: "Hello there!", sending: false, key: 1 },
  ]);

  // Функція для імітації відправлення повідомлення
  const deliverMessage = async (message) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(message), 500);
    });
  };

  // Функція для відправлення повідомлення
  const sendMessage = async (formData) => {
    const sentMessage = await deliverMessage(formData.get("message")); // Імітація відправлення
    setMessages((prevMessages) => [...prevMessages, { text: sentMessage }]); // Оновлюємо стан
  };

  return (
    <>
      <Thread messages={messages} sendMessage={sendMessage} />;
      <FormStatusExample />
      <UploadForm />
      <main className="app-shell">
        <section className="hero-panel">
          <h1>Student Dashboard</h1>
          <p>Welcome to the React lesson app.</p>
        </section>

        {/* <Students students={students} /> */}
        <MessageDemo
          state={[
            { text: "Hello, World!", sending: true },
            { text: "World!", sending: false },
          ]}
        />
      </main>
      <div>
        {/* Умовний рендеринг компонента профілю */}
        {showProfile && <Parent />}

        {/* Кнопка для перемикання стану */}
        <button onClick={toggleProfile}>
          {showProfile ? "Приховати профіль" : "Показати профіль"}
        </button>
      </div>
    </>
  );
}

export default App;
