import { useEffect, useState } from "react";
import styles from "./LifeAct.module.css";

// Приклад функціонального компонента з використанням хуків
const LifeActComponent = ({ id: initialId }) => {
  // Стан компонента
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState(initialId);

  useEffect(() => {
    // Код виконається при зміні id
    console.log("Компонент ініціалізовано");
  }, []);

  // Ефект при монтуванні (аналог componentDidMount)
  useEffect(() => {
    console.log("Компонент змонтовано, виконується запит до API");
    const fetchInitialData = async () => {
      setLoading(true);
      try {
        // const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/`,
        );
        const result = await response.json();
        setData(result);
      } finally {
        setLoading(false);
      }
    };

    fetchInitialData();

    // Очищення при демонтуванні (аналог componentWillUnmount)
    return () => {
      // Очищення ресурсів, наприклад відміна запитів
      console.log("Компонент демонтується, очищення ресурсів");
      setData([]);
    };
  }, []); // Пустий масив - виконання тільки при монтуванні

  // Ефект при оновленні id (аналог componentDidUpdate)
  useEffect(() => {
    // Код виконається при зміні id
    console.log("Компонент оновлено, id змінився:", id);
    
  }, [id]);

  const handleIdChange = (e) => {
    setId(e.target.value);
  };

  return (
    <>
      <div>
        <label htmlFor="idInput">Введіть ID: </label>
        <input
          id="idInput"
          type="number"
          value={id}
          onChange={handleIdChange}
          placeholder="Введіть ID користувача"
          className={styles.test}
        />
      </div>
      <div>
        {loading ? (
          <p>Завантаження...</p>
        ) : (
          <ul>
            {data.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default LifeActComponent;