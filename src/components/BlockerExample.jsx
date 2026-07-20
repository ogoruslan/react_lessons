import { useState } from "react";
import { useBlocker } from "react-router-dom";

function BlockerExample() {
  const initialForm = {
    title: "",
    notes: "",
    agree: false,
  };

  const [form, setForm] = useState(initialForm);
  const isDirty =
    form.title.trim() !== "" ||
    form.notes.trim() !== "" ||
    form.agree;

  const blocker = useBlocker(() => isDirty);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setForm((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleReset = () => {
    setForm(initialForm);
  };

  return (
    <div className="component-card">
      <h3>useBlocker: збережіть зміни перед переходом</h3>
      <p className="page-intro">
        Заповніть форму, а потім спробуйте перейти на іншу сторінку. React Router не дозволить
        покинути сторінку, доки ви не підтвердите або не скасуєте зміну.
      </p>

      <div className="form-card">
        <label>
          <span>Назва</span>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Введіть назву"
          />
        </label>

        <label>
          <span>Коментар</span>
          <textarea
            name="notes"
            value={form.notes}
            onChange={handleChange}
            rows={4}
            placeholder="Опишіть свій стан"
          />
        </label>

        <label className="checkbox-row">
          <input name="agree" type="checkbox" checked={form.agree} onChange={handleChange} />
          <span>Підтверджую, що хочу залишити ці зміни</span>
        </label>

        <div className="blocker-actions">
          <button type="button" onClick={handleReset}>
            Скинути
          </button>
          <button type="button" className="secondary-button" disabled>
            Зберегти
          </button>
        </div>
      </div>

      {blocker.state === "blocked" && (
        <div className="blocker-dialog">
          <p>У вас є незбережені зміни. Продовжити перехід?</p>
          <div className="blocker-actions">
            <button type="button" onClick={() => blocker.proceed()}>
              Так, продовжити
            </button>
            <button type="button" className="secondary-button" onClick={() => blocker.reset()}>
              Залишитися тут
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default BlockerExample;
