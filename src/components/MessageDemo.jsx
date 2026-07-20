import { useOptimistic, useState } from "react";

const initialMessages = [
  { id: 1, text: "Ласкаво просимо до демонстрації повідомлень", sending: false },
  { id: 2, text: "Це приклад оптимістичного оновлення", sending: false },
];

function MessageDemo() {
  const [messages, setMessages] = useState(initialMessages);
  const [draft, setDraft] = useState("");

  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    messages,
    (currentMessages, newMessage) => [...currentMessages, newMessage],
  );

  const handleSubmit = async (event) => {
    event.preventDefault();

    const text = draft.trim();
    if (!text) {
      return;
    }

    const tempMessage = { id: Date.now(), text, sending: true };
    addOptimisticMessage(tempMessage);
    setDraft("");

    await new Promise((resolve) => setTimeout(resolve, 700));

    setMessages((prev) => [...prev, { ...tempMessage, sending: false }]);
  };

  return (
    <div className="component-card">
      <h3>Демо повідомлень</h3>
      <p>Після відправки повідомлення спочатку з&apos;являється оптимістичний стан, а потім він фіксується.</p>

      <form onSubmit={handleSubmit} style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
        <input
          type="text"
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          placeholder="Напишіть повідомлення"
          style={{ minWidth: "220px", flex: 1 }}
        />
        <button type="submit">Надіслати</button>
      </form>

      <div className="message-list">
        {optimisticMessages.map((message) => (
          <div className="message-item" key={message.id}>
            {message.text}
            {message.sending && <small> (відправляється...)</small>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MessageDemo;
