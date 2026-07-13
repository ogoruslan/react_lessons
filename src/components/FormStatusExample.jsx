'use client'; // Потрібно для server actions (якщо використовується)

import { useFormStatus } from 'react-dom';
import { useState } from 'react';

// Приклад 1: Простий компонент з useFormStatus
const SubmitButton = () => {
  const { pending } = useFormStatus();
  
  return (
    <button type="submit" disabled={pending}>
      {pending ? 'Завантаження...' : 'Надіслати'}
    </button>
  );
};

// Приклад 2: Компонент з відображенням даних форми
const FormInput = ({ name, placeholder }) => {
  const { pending, data } = useFormStatus();
  const inputValue = data?.get(name); // Отримуємо значення з формованих даних
  
  return (
    <div>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        disabled={pending}
        required
      />
      {inputValue && <p className="form-info">Введено: {inputValue}</p>}
    </div>
  );
};

// Приклад 3: Повна форма з useFormStatus
export const FormStatusExample = () => {
  const [message, setMessage] = useState('');

  // Імітація server action
  const handleSubmit = async (formData) => {
    const name = formData.get('name');
    const email = formData.get('email');
    
    // Імітація затримки сервера
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    setMessage(`Привіт, ${name}! Дякуємо за реєстрацію. Email: ${email}`);
  };

  return (
    <div className="form-container" style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h2>Приклад useFormStatus</h2>
      
      <form action={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="name">Ім'я:</label>
          <FormInput name="name" placeholder="Введіть ваше ім'я" />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="email">Email:</label>
          <FormInput name="email" placeholder="Введіть вашу email" />
        </div>

        <SubmitButton />
      </form>

      {message && (
        <div style={{ 
          marginTop: '20px', 
          padding: '10px', 
          backgroundColor: '#e8f5e9', 
          borderRadius: '4px',
          color: '#2e7d32'
        }}>
          {message}
        </div>
      )}
    </div>
  );
};

// Приклад 4: Компонент з відображенням файлів
const FileUploadWithStatus = () => {
  const { pending, data } = useFormStatus();
  const file = data?.get('file'); // Отримуємо файл з форми

  return (
    <div>
      <input 
        type="file" 
        name="file" 
        disabled={pending}
        accept="image/*"
      />
      {pending && <p>Завантажуємо файл...</p>}
      {file && <p>Файл обрано: {file.name}</p>}
      <button type="submit" disabled={pending}>
        {pending ? 'Завантажується...' : 'Завантажити'}
      </button>
    </div>
  );
};

// Приклад 5: Форма з приховуванням кнопки під час обробки
const AdvancedFormExample = () => {
  const { pending, data } = useFormStatus();
  const [result, setResult] = useState(null);

  const handleSubmit = async (formData) => {
    const message = formData.get('message');
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setResult(`Повідомлення отримано: "${message}"`);
  };

  return (
    <form action={handleSubmit} style={{ marginTop: '20px' }}>
      <textarea
        name="message"
        placeholder="Введіть ваше повідомлення..."
        disabled={pending}
        required
        rows={5}
      />
      
      <div style={{ marginTop: '10px' }}>
        <button type="submit" disabled={pending}>
          {pending ? '⏳ Обробка...' : '✓ Відправити'}
        </button>
      </div>

      {data && (
        <p style={{ color: '#999', fontSize: '0.9em' }}>
          Ви пишете: {data.get('message')}
        </p>
      )}

      {result && (
        <div style={{ 
          marginTop: '15px', 
          padding: '10px', 
          backgroundColor: '#e3f2fd', 
          borderRadius: '4px'
        }}>
          {result}
        </div>
      )}
    </form>
  );
};

// Експортуємо всі приклади
export default FormStatusExample;
