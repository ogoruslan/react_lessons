import { useState } from 'react';
import {
  Box,
  Button,
  Paper,
  Stack,
  Typography,
} from '@mui/material';

function ParentComponent() {
  const [isOpen, setIsOpen] = useState(true);
  const [likes, setLikes] = useState(0);

  return (
    <Paper sx={{ p: 4 }} elevation={3}>
      <Typography variant="h4" gutterBottom>
        Батьківський компонент
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Цей приклад показує, як стан і події працюють у батьківському компоненті.
      </Typography>

      <Stack direction="row" spacing={2} flexWrap="wrap" sx={{ mb: 3 }}>
        <Button variant="contained" onClick={() => setIsOpen((prev) => !prev)}>
          {isOpen ? 'Сховати' : 'Показати'} профіль
        </Button>
        <Button variant="outlined" onClick={() => setLikes((prev) => prev + 1)}>
          Лайків: {likes}
        </Button>
      </Stack>

      {isOpen && (
        <Paper sx={{ p: 3, bgcolor: 'grey.50' }} elevation={1}>
          <Typography variant="h6" gutterBottom>
            Профіль користувача
          </Typography>
          <Typography>Ім&apos;я: Олександр</Typography>
          <Typography>Курс: React для початківців</Typography>
          <Typography>Статус: вивчає state та props</Typography>
        </Paper>
      )}
    </Paper>
  );
}

export default ParentComponent;

// const ChildCounter = ({ count, onIncrement, onDecrement, label }) => {
//   return (
//     <div>
//       <h2>{label}: {count}</h2>
//       {onIncrement && (
//         <button onClick={onIncrement}>Збільшити</button>
//       )}
//       {onDecrement && (
//         <button onClick={onDecrement}>Зменшити</button>
//       )}
//     </div>
//   );
// };

// export default ParentComponent;
