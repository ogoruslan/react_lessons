import { object, string } from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';

// Схема валідації форми відгуків
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
    .required('Текст відгуку є обов\'язковим')
});

const FeedbackForm = () => {
  // Обробник відправки форми
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      // Імітація відправки даних на сервер
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
    <Formik
      initialValues={{
        name: '',
        email: '',
        feedback: ''
      }}
      validationSchema={feedbackSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="feedback-form">
          <div className="form-group">
            <label htmlFor="name">Ім'я</label>
            <Field
              id="name"
              type="text"
              name="name"
              className="form-field"
              placeholder="Введіть ваше ім'я"
              aria-label="Ім'я"
            />
            <ErrorMessage
              name="name"
              component="div"
              className="error-message"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Електронна пошта</label>
            <Field
              id="email"
              type="email"
              name="email"
              className="form-field"
              placeholder="Введіть вашу електронну пошту"
              aria-label="Електронна пошта"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="error-message"
            />
          </div>

          <div className="form-group">
            <label htmlFor="feedback">Відгук</label>
            <Field
              id="feedback"
              as="textarea"
              name="feedback"
              className="form-field feedback-textarea"
              placeholder="Напишіть ваш відгук"
              aria-label="Текст відгуку"
              rows="4"
            />
            <ErrorMessage
              name="feedback"
              component="div"
              className="error-message"
            />
          </div>

          <button
            type="submit"
            className="submit-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Відправка...' : 'Надіслати відгук'}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FeedbackForm;
