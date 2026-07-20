import { useState } from "react";

function FormStatusExample() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [message, setMessage] = useState("");
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsPending(true);
    setMessage("");

    await new Promise((resolve) => setTimeout(resolve, 1200));

    setMessage(`Привіт, ${formData.name}! Дякуємо за реєстрацію. Email: ${formData.email}`);
    setIsPending(false);
  };

  return (
    <div className="component-card">
      <h3>Приклад форми з станом завантаження</h3>
      <p>Форма симулює відправку даних і показує індикатор очікування.</p>

      <form onSubmit={handleSubmit} className="form-card">
        <input
          type="text"
          name="name"
          placeholder="Ваше ім&apos;я"
          value={formData.name}
          onChange={(event) => setFormData((prev) => ({ ...prev, name: event.target.value }))}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Ваш email"
          value={formData.email}
          onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))}
          required
        />

        <button type="submit" disabled={isPending}>
          {isPending ? "Надсилаємо..." : "Надіслати"}
        </button>
      </form>

      {message && <div className="form-status-box">{message}</div>}
    </div>
  );
}

export default FormStatusExample;
