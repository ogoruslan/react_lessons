import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  Box,
  Button,
  CircularProgress,
  Paper,
  TextField,
  Typography,
} from '@mui/material';

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
    <Paper sx={{ p: 4, maxWidth: 560, mx: 'auto' }} elevation={3}>
      <Typography variant="h4" component="h2" gutterBottom>
        Реєстрація через react-hook-form + zod
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Ця форма показує, як з допомогою zod і react-hook-form робити
        валідацію даних перед відправкою.
      </Typography>

      <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ display: 'grid', gap: 2 }}>
        <TextField
          id="username"
          label="Ім'я користувача"
          placeholder="Введіть ім'я користувача"
          fullWidth
          error={!!errors.username}
          helperText={errors.username?.message}
          {...register('username')}
        />

        <TextField
          id="email"
          label="Електронна пошта"
          placeholder="Введіть електронну пошту"
          fullWidth
          type="email"
          error={!!errors.email}
          helperText={errors.email?.message}
          {...register('email')}
        />

        <TextField
          id="password"
          label="Пароль"
          placeholder="Введіть пароль"
          fullWidth
          type="password"
          error={!!errors.password}
          helperText={errors.password?.message}
          {...register('password')}
        />

        <TextField
          id="confirmPassword"
          label="Підтвердження пароля"
          placeholder="Повторіть пароль"
          fullWidth
          type="password"
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword?.message}
          {...register('confirmPassword')}
        />

        <Button type="submit" variant="contained" size="large" disabled={isSubmitting}>
          {isSubmitting ? <CircularProgress size={20} color="inherit" /> : 'Зареєструватися'}
        </Button>
      </Box>
    </Paper>
  );
};

export default HookFormRegistration;
