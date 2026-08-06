import { Link, useRouteError } from 'react-router-dom';
import {
  Alert,
  Box,
  Button,
  Paper,
  Typography,
} from '@mui/material';

function RouteErrorExample() {
  const error = useRouteError();

  return (
    <Paper sx={{ p: 4 }} elevation={3}>
      <Typography variant="h4" gutterBottom>
        useRouteError
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Цей приклад показує, як React Router ловить помилки маршруту та передає їх у компонент
        через hook useRouteError.
      </Typography>

      <Box sx={{ mb: 3 }}>
        <Alert severity="error" sx={{ mb: 2 }}>
          <Typography variant="subtitle1">
            <strong>Тип помилки:</strong> {error?.name || 'UnknownError'}
          </Typography>
          <Typography variant="body2">
            <strong>Повідомлення:</strong> {error?.message || 'Невідома помилка'}
          </Typography>
        </Alert>
        {error?.stack ? (
          <Paper sx={{ p: 2, bgcolor: 'grey.100', whiteSpace: 'pre-wrap', mb: 2 }}>
            {error.stack}
          </Paper>
        ) : null}
      </Box>

      <Button component={Link} to="/" variant="contained">
        Повернутися на головну
      </Button>
    </Paper>
  );
}

function ThrowingRouteComponent() {
  throw new Error('Симуляція помилки з маршруту');
}

export { RouteErrorExample, ThrowingRouteComponent };
export default RouteErrorExample;
