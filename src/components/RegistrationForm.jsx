import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Paper,
  TextField,
  Typography,
} from '@mui/material';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
  acceptTerms: false,
};

const validationSchema = Yup.object({
  firstName: Yup.string()
    .trim()
    .min(2, "Ім'я має містити щонайменше 2 символи")
    .required("Обов'язкове поле"),
  lastName: Yup.string()
    .trim()
    .min(2, "Прізвище має містити щонайменше 2 символи")
    .required("Обов'язкове поле"),
  email: Yup.string()
    .email("Невірний формат email")
    .required("Обов'язкове поле"),
  password: Yup.string()
    .min(6, "Пароль має містити щонайменше 6 символів")
    .required("Обов'язкове поле"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], "Паролі мають співпадати")
    .required("Обов'язкове поле"),
  acceptTerms: Yup.boolean().oneOf([true], "Потрібно прийняти умови"),
});

function RegistrationForm() {
  return (
    <Paper sx={{ p: 4, maxWidth: 600, mx: 'auto' }} elevation={3}>
      <Typography variant="h4" gutterBottom>
        Форма реєстрації
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Заповніть дані, щоб створити акаунт.
      </Typography>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log('Registration data:', values);
          alert(`Реєстрацію успішно створено для ${values.email}`);
          resetForm();
        }}
      >{({ values, errors, touched, handleChange, handleBlur, isSubmitting }) => (
        <Box component={Form} sx={{ display: 'grid', gap: 2 }}>
          <TextField
            id="firstName"
            name="firstName"
            label="Ім'я"
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.firstName && Boolean(errors.firstName)}
            helperText={touched.firstName && errors.firstName}
            fullWidth
          />

          <TextField
            id="lastName"
            name="lastName"
            label="Прізвище"
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.lastName && Boolean(errors.lastName)}
            helperText={touched.lastName && errors.lastName}
            fullWidth
          />

          <TextField
            id="email"
            name="email"
            label="Email"
            type="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email && errors.email}
            fullWidth
          />

          <TextField
            id="password"
            name="password"
            label="Пароль"
            type="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.password && Boolean(errors.password)}
            helperText={touched.password && errors.password}
            fullWidth
          />

          <TextField
            id="confirmPassword"
            name="confirmPassword"
            label="Підтвердження пароля"
            type="password"
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.confirmPassword && Boolean(errors.confirmPassword)}
            helperText={touched.confirmPassword && errors.confirmPassword}
            fullWidth
          />

          <FormControlLabel
            control={
              <Checkbox
                name="acceptTerms"
                checked={values.acceptTerms}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            }
            label="Я приймаю умови користування"
          />
          {touched.acceptTerms && errors.acceptTerms && (
            <Typography variant="body2" color="error">
              {errors.acceptTerms}
            </Typography>
          )}

          <Button type="submit" variant="contained" disabled={isSubmitting} size="large">
            {isSubmitting ? 'Обробка...' : 'Зареєструватися'}
          </Button>
        </Box>
      )}</Formik>
    </Paper>
  );
}

export default RegistrationForm;
