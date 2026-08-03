import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
import { object, array, string } from 'yup';

const reservedNames = ['admin', 'test', 'demo'];

const checkNameInDatabase = async (value) => {
  if (!value) {
    return false;
  }

  await Promise.resolve();
  return !reservedNames.includes(value.trim().toLowerCase());
};

// Схема валідації для форми з масивом
const validationSchema = object({
  items: array()
    .of(
      object({
        name: string()
          .required("Обов'язкове поле")
          .test('unique-name', 'Ім\'я вже існує', async (value) => {
            // Асинхронна перевірка
            const isUnique = await checkNameInDatabase(value); // Приклад асинхронної функції
            return isUnique;
          }),
      })
    )
    .required('Має бути хоча б один елемент'),
});

// Компонент форми з масивом
const MyForm = () => (
  <Formik
    initialValues={{ items: [{ name: '' }] }}
    validationSchema={validationSchema}
    onSubmit={(values) => console.log(values)}
    validateOnBlur={true} // Валідація при втраті фокусу
    validateOnChange={false} // Вимкнена валідація при кожній зміні
  >
    {({ values }) => (
      <Form>
        <FieldArray name="items">
          {({ insert, remove, push }) => (
            <div>
              {values.items.length > 0 &&
                values.items.map((item, index) => (
                  <div key={index}>
                    <Field name={`items.${index}.name`} />
                    <ErrorMessage name={`items.${index}.name`} component="div" />
                    <button type="button" onClick={() => remove(index)}>
                      Видалити
                    </button>
                  </div>
                ))}
              <button type="button" onClick={() => push({ name: '' })}>
                Додати
              </button>
            </div>
          )}
        </FieldArray>
        <button type="submit">Відправити</button>
      </Form>
    )}
  </Formik>
);

export default MyForm;