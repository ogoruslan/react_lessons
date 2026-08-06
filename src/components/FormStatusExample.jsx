import { useState } from 'react';
import {
  Alert,
  Box,
  Button,
  Paper,
  TextField,
  Typography,
} from '@mui/material';

function FormStatusExample() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [message, setMessage] = useState('');
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsPending(true);
    setMessage('');

    await new Promise((resolve) => setTimeout(resolve, 1200));

    setMessage(`Привіт, ${formData.name}! Дякуємо за реєстрацію. Email: ${formData.email}`);
    setIsPending(false);
  };

  return (
    <Paper sx={{ p: 4 }} elevation={3}>
      <Typography variant="h4" gutterBottom>
        Приклад форми з станом завантаження
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Форма симулює відправку даних і показує індикатор очікування.
      </Typography>

      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'grid', gap: 2 }}>
        <TextField
          name="name"
          label="Ваше ім'я"
          value={formData.name}
          onChange={(event) => setFormData((prev) => ({ ...prev, name: event.target.value }))}
          required
          fullWidth
        />

        <TextField
          name="email"
          label="Ваш email"
          type="email"
          value={formData.email}
          onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))}
          required
          fullWidth
        />

        <Button type="submit" variant="contained" disabled={isPending} size="large">
          {isPending ? 'Надсилаємо...' : 'Надіслати'}
        </Button>
      </Box>

      {message && (
        <Alert severity="success" sx={{ mt: 3 }}>
          {message}
        </Alert>
      )}
    </Paper>
  );
}

export default FormStatusExample;
