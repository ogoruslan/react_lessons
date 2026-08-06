import { Box, Paper, Typography } from '@mui/material';

function LazyExample() {
  return (
    <Paper sx={{ p: 4 }} elevation={3}>
      <Typography variant="h4" gutterBottom>
        Приклад lazy loading
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Цей компонент завантажується динамічно за допомогою React.lazy та Suspense.
      </Typography>
      <Typography>
        Lazy loading покращує час першого рендеру, завантажуючи код тільки тоді, коли він потрібен.
      </Typography>
    </Paper>
  );
}

export default LazyExample;
