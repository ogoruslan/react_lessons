import { useState } from 'react';
import { useBlocker } from 'react-router-dom';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';

function BlockerExample() {
  const initialForm = {
    title: '',
    notes: '',
    agree: false,
  };

  const [form, setForm] = useState(initialForm);
  const isDirty =
    form.title.trim() !== '' ||
    form.notes.trim() !== '' ||
    form.agree;

  const blocker = useBlocker(() => isDirty);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setForm((current) => ({
      ...current,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleReset = () => {
    setForm(initialForm);
  };

  return (
    <Paper sx={{ p: 4 }} elevation={3}>
      <Typography variant="h4" gutterBottom>
        useBlocker: збережіть зміни перед переходом
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Заповніть форму, а потім спробуйте перейти на іншу сторінку. React Router не дозволить
        покинути сторінку, доки ви не підтвердите або не скасуєте зміну.
      </Typography>

      <Stack spacing={3}>
        <TextField
          label="Назва"
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Введіть назву"
          fullWidth
        />

        <TextField
          label="Коментар"
          name="notes"
          value={form.notes}
          onChange={handleChange}
          placeholder="Опишіть свій стан"
          fullWidth
          multiline
          rows={4}
        />

        <FormControlLabel
          control={<Checkbox name="agree" checked={form.agree} onChange={handleChange} />}
          label="Підтверджую, що хочу залишити ці зміни"
        />

        <Stack direction="row" spacing={2} flexWrap="wrap">
          <Button variant="contained" onClick={handleReset}>
            Скинути
          </Button>
          <Button variant="outlined" disabled>
            Зберегти
          </Button>
        </Stack>
      </Stack>

      {blocker.state === 'blocked' && (
        <Paper sx={{ p: 3, mt: 4, bgcolor: 'warning.lighter' }} elevation={1}>
          <Typography variant="body1" gutterBottom>
            У вас є незбережені зміни. Продовжити перехід?
          </Typography>
          <Stack direction="row" spacing={2} flexWrap="wrap">
            <Button variant="contained" onClick={() => blocker.proceed()}>
              Так, продовжити
            </Button>
            <Button variant="outlined" onClick={() => blocker.reset()}>
              Залишитися тут
            </Button>
          </Stack>
        </Paper>
      )}
    </Paper>
  );
}

export default BlockerExample;
