import { useState } from 'react';
import {
  Alert,
  Box,
  Button,
  Paper,
  Typography,
} from '@mui/material';

function UploadForm() {
  const [fileName, setFileName] = useState('');
  const [status, setStatus] = useState('');
  const [isUploading, setIsUploading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!fileName) {
      setStatus('Оберіть файл перед завантаженням.');
      return;
    }

    setIsUploading(true);
    setStatus('');

    await new Promise((resolve) => setTimeout(resolve, 1200));

    setStatus(`Файл «${fileName}» успішно завантажено.`);
    setIsUploading(false);
  };

  return (
    <Paper sx={{ p: 4 }} elevation={3}>
      <Typography variant="h4" gutterBottom>
        Форма завантаження
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Цей приклад імітує завантаження файлу й показує стан процесу.
      </Typography>

      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'grid', gap: 2 }}>
        <Button variant="outlined" component="label" fullWidth>
          Вибрати файл
          <input
            type="file"
            hidden
            onChange={(event) => {
              const selectedFile = event.target.files?.[0];
              setFileName(selectedFile ? selectedFile.name : '');
            }}
          />
        </Button>

        <Typography variant="body2" color="text.secondary">
          {fileName || 'Файл не обрано'}
        </Typography>

        <Button type="submit" variant="contained" disabled={isUploading} size="large">
          {isUploading ? 'Завантажуємо...' : 'Завантажити файл'}
        </Button>
      </Box>

      {status && (
        <Alert severity="success" sx={{ mt: 3 }}>
          {status}
        </Alert>
      )}
    </Paper>
  );
}

export default UploadForm;
