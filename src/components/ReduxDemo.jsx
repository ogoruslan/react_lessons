import { useDispatch, useSelector } from 'react-redux';
import {
  decrement,
  fetchIncrementAsync,
  increment,
  reset,
} from '../redux/store';
import {
  Alert,
  Box,
  Button,
  Paper,
  Stack,
  Typography,
} from '@mui/material';

function ReduxDemo() {
  const count = useSelector((state) => state.count);
  const status = useSelector((state) => state.status);
  const error = useSelector((state) => state.error);
  const dispatch = useDispatch();

  return (
    <Paper sx={{ p: 4 }} elevation={3}>
      <Typography variant="h4" gutterBottom>
        Навчальний Redux
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Цей приклад показує, як Redux зберігає стан у одному місці і оновлює
        його через actions.
      </Typography>

      <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
        Значення: {count}
      </Typography>
      <Typography variant="body2" color="text.secondary" paragraph>
        Статус: {status}
      </Typography>
      {error && <Alert severity="error">Помилка: {error}</Alert>}

      <Stack direction="row" spacing={2} flexWrap="wrap" sx={{ mt: 2 }}>
        <Button variant="contained" onClick={() => dispatch(increment())}>
          +1
        </Button>
        <Button variant="contained" onClick={() => dispatch(decrement())}>
          -1
        </Button>
        <Button
          variant="outlined"
          onClick={() => dispatch(fetchIncrementAsync())}
          disabled={status === 'loading'}
        >
          Async +1
        </Button>
        <Button variant="outlined" onClick={() => dispatch(reset())}>
          Скинути
        </Button>
      </Stack>
    </Paper>
  );
}

export default ReduxDemo;
