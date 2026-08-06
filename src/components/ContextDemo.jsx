import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import {
  Box,
  Button,
  Paper,
  Stack,
  Typography,
} from '@mui/material';

function UserSummary() {
  const { selectedUserId, users } = useContext(AppContext);
  const selectedUser = users.find((user) => user.id === selectedUserId);

  return (
    <Paper sx={{ p: 3, bgcolor: 'grey.50' }} elevation={1}>
      <Typography variant="h6" gutterBottom>
        Обраний користувач
      </Typography>
      <Typography>
        {selectedUser ? `${selectedUser.name} — ${selectedUser.role}` : 'Користувача не знайдено'}
      </Typography>
    </Paper>
  );
}

function ThemeSwitcher() {
  const { theme, toggleTheme } = useContext(AppContext);

  return (
    <Paper sx={{ p: 3, bgcolor: 'grey.50' }} elevation={1}>
      <Typography variant="body1" paragraph>
        Поточна тема: <strong>{theme}</strong>
      </Typography>
      <Button variant="contained" onClick={toggleTheme}>
        Змінити тему
      </Button>
    </Paper>
  );
}

function ContextDemo() {
  const { users, setSelectedUserId } = useContext(AppContext);

  return (
    <Paper sx={{ p: 4 }} elevation={3}>
      <Typography variant="h4" gutterBottom>
        Демонстрація контексту
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Дані надходять без пропсів — лише через контекст.
      </Typography>

      <Box sx={{ mb: 3 }}>
        <Stack direction="row" flexWrap="wrap" spacing={1}>
          {users.map((user) => (
            <Button key={user.id} variant="outlined" onClick={() => setSelectedUserId(user.id)}>
              {user.name}
            </Button>
          ))}
        </Stack>
      </Box>

      <Stack spacing={2}>
        <ThemeSwitcher />
        <UserSummary />
      </Stack>
    </Paper>
  );
}

export default ContextDemo;
