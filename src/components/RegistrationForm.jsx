import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
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
    .oneOf([Yup.ref("password"), null], "Паролі мають співпадати")
    .required("Обов'язкове поле"),
  acceptTerms: Yup.boolean().oneOf([true], "Потрібно прийняти умови"),
});

function RegistrationForm() {
  return (
    <div className="form-shell">
      <h2>Форма реєстрації</h2>
      <p>Заповніть дані, щоб створити акаунт.</p>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log("Registration data:", values);
          alert(`Реєстрацію успішно створено для ${values.email}`);
          resetForm();
        }}
      >
        {({ isSubmitting }) => (
          <Form className="registration-form">
            <div className="form-group">
              <label htmlFor="firstName">Ім'я</label>
              <Field id="firstName" name="firstName" type="text" className="form-field" />
              <ErrorMessage name="firstName" component="div" className="error-message" />
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Прізвище</label>
              <Field id="lastName" name="lastName" type="text" className="form-field" />
              <ErrorMessage name="lastName" component="div" className="error-message" />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field id="email" name="email" type="email" className="form-field" />
              <ErrorMessage name="email" component="div" className="error-message" />
            </div>

            <div className="form-group">
              <label htmlFor="password">Пароль</label>
              <Field id="password" name="password" type="password" className="form-field" />
              <ErrorMessage name="password" component="div" className="error-message" />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Підтвердження пароля</label>
              <Field id="confirmPassword" name="confirmPassword" type="password" className="form-field" />
              <ErrorMessage name="confirmPassword" component="div" className="error-message" />
            </div>

            <label className="checkbox-row">
              <Field type="checkbox" name="acceptTerms" />
              Я приймаю умови користування
            </label>
            <ErrorMessage name="acceptTerms" component="div" className="error-message" />

            <button type="submit" className="submit-button" disabled={isSubmitting}>
              {isSubmitting ? "Обробка..." : "Зареєструватися"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default RegistrationForm;
