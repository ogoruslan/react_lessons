import { useOptimistic, useState } from "react";

const initialMessages = [
  { id: 1, text: "ривіт! Як справи?", sending: false },
  { id: 2, text: "озпочинаємо навчання React", sending: false },
];

function Thread() {
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

    await new Promise((resolve) => setTimeout(resolve, 800));

    setMessages((prev) => [...prev, { ...tempMessage, sending: false }]);
  };

  return (
    <div className="thread-card">
      <h3>Тема для обговорення</h3>
      <p>Тут можна відправляти повідомлення у стилі чат-стрічки.</p>

      <div className="thread-list">
        {optimisticMessages.map((message) => (
          <div className="message-item" key={message.id}>
            {message.text}
            {message.sending && <small> (надсилається...)</small>}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
        <input
          type="text"
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          placeholder="апишіть повідомлення"
          style={{ flex: 1, minWidth: "220px" }}
        />
        <button type="submit">адіслати</button>
      </form>
    </div>
  );
}

export default Thread;
