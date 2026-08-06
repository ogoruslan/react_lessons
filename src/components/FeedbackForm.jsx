import { object, string } from 'yup';
import { Formik, Form } from 'formik';
import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
} from '@mui/material';

const feedbackSchema = object().shape({
  name: string()
    .trim()
    .required("Ім'я є обов'язковим"),
  email: string()
    .trim()
    .email('Некоректний формат електронної адреси')
    .required('Електронна пошта є обов\'язкова'),
  feedback: string()
    .trim()
    .min(10, 'Відгук повинен містити щонайменше 10 символів')
    .required('Текст відгуку є обов\'язковим'),
});

const FeedbackForm = () => {
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Дані форми:', values);
      resetForm();
      alert('Дякуємо за ваш відгук!');
    } catch (error) {
      console.error('Помилка відправки:', error);
      alert('Виникла помилка при відправці. Спробуйте пізніше.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Paper sx={{ p: 4, maxWidth: 600, mx: 'auto' }} elevation={3}>
      <Typography variant="h4" gutterBottom>
        Залишіть відгук
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Ми цінуємо вашу думку — напишіть короткий відгук про проєкт.
      </Typography>

      <Formik
        initialValues={{
          name: '',
          email: '',
          feedback: '',
        }}
        validationSchema={feedbackSchema}
        onSubmit={handleSubmit}
      >{({ values, errors, touched, handleChange, handleBlur, isSubmitting }) => (
        <Box component={Form} sx={{ display: 'grid', gap: 2 }}>
          <TextField
            id="name"
            name="name"
            label="Ім'я"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.name && Boolean(errors.name)}
            helperText={touched.name && errors.name}
            fullWidth
          />

          <TextField
            id="email"
            name="email"
            label="Електронна пошта"
            type="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email && errors.email}
            fullWidth
          />

          <TextField
            id="feedback"
            name="feedback"
            label="Відгук"
            value={values.feedback}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.feedback && Boolean(errors.feedback)}
            helperText={touched.feedback && errors.feedback}
            fullWidth
            multiline
            rows={4}
          />

          <Button type="submit" variant="contained" disabled={isSubmitting} size="large">
            {isSubmitting ? 'Відправка...' : 'Надіслати відгук'}
          </Button>
        </Box>
      )}</Formik>
    </Paper>
  );
};

export default FeedbackForm;
