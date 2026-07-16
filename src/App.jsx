import { useState } from "react";

import "./App.css";

import Students from "./components/Students";
import Parent from "./components/Parent";
import MessageDemo from "./components/MessageDemo";
import UploadForm from "./components/UploadForm";
import FormStatusExample from "./components/FormStatusExample";
import Thread from "./components/Thread";
import LifeActComponent from "./components/LifeAct";

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
      <LifeActComponent id={1} />
      {/* <Thread messages={messages} sendMessage={sendMessage} />; */}
      {/* <FormStatusExample /> */}
      {/* <UploadForm /> */}
      
    </>
  );
}


export default App;
