import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const schema = z
  .object({
    username: z.string().min(3, 'Ім’я має містити щонайменше 3 символи'),
    email: z.string().email('Некоректний формат електронної пошти'),
    password: z
      .string()
      .min(8, 'Пароль повинен містити щонайменше 8 символів')
      .regex(/[A-Z]/, 'Пароль має містити хоча б одну велику літеру')
      .regex(/[0-9]/, 'Пароль має містити хоча б одну цифру'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Паролі не співпадають',
    path: ['confirmPassword'],
  });

const HookFormRegistration = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
    mode: 'onBlur',
  });

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('Дані форми:', data);
      alert('Реєстрація успішна!');
      reset();
    } catch (error) {
      console.error('Помилка реєстрації:', error);
      alert('Виникла помилка при реєстрації. Спробуйте пізніше.');
    }
  };

  return (
    <div className="form-shell">
      <h2>Реєстрація через react-hook-form + zod</h2>
      <p>
        Ця форма показує, як з допомогою zod і react-hook-form робити
        валідацію даних перед відправкою.
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="registration-form">
        <div className="form-group">
          <label htmlFor="username">Ім&apos;я користувача</label>
          <input
            id="username"
            type="text"
            className="form-field"
            placeholder="Введіть ім'я користувача"
            aria-label="Ім'я користувача"
            {...register('username')}
          />
          {errors.username && (
            <p className="error-message">{errors.username.message}</p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="email">Електронна пошта</label>
          <input
            id="email"
            type="email"
            className="form-field"
            placeholder="Введіть електронну пошту"
            aria-label="Електронна пошта"
            {...register('email')}
          />
          {errors.email && <p className="error-message">{errors.email.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Пароль</label>
          <input
            id="password"
            type="password"
            className="form-field"
            placeholder="Введіть пароль"
            aria-label="Пароль"
            {...register('password')}
          />
          {errors.password && (
            <p className="error-message">{errors.password.message}</p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Підтвердження пароля</label>
          <input
            id="confirmPassword"
            type="password"
            className="form-field"
            placeholder="Повторіть пароль"
            aria-label="Підтвердження пароля"
            {...register('confirmPassword')}
          />
          {errors.confirmPassword && (
            <p className="error-message">{errors.confirmPassword.message}</p>
          )}
        </div>

        <button type="submit" className="submit-button" disabled={isSubmitting}>
          {isSubmitting ? 'Реєстрація...' : 'Зареєструватися'}
        </button>
      </form>
    </div>
  );
};

export default HookFormRegistration;
