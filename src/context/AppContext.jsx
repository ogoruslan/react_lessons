import { createContext, useMemo, useState } from "react";

const DEFAULT_USERS = [
  { id: 1, name: "Олена", role: "Студентка" },
  { id: 2, name: "Максим", role: "Ментор" },
  { id: 3, name: "Ірина", role: "Дослідник" },
];

const defaultContextValue = {
  users: DEFAULT_USERS,
  theme: "light",
  toggleTheme: () => {},
  selectedUserId: 1,
  setSelectedUserId: () => {},
};

const AppContext = createContext(defaultContextValue);

function AppProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const [selectedUserId, setSelectedUserId] = useState(1);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  const value = useMemo(
    () => ({
      users: DEFAULT_USERS,
      theme,
      toggleTheme,
      selectedUserId,
      setSelectedUserId,
    }),
    [theme, selectedUserId]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export { AppContext, AppProvider };
