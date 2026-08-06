import { useOptimistic, useState } from 'react';
import {
  Box,
  Button,
  List,
  ListItem,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';

const initialMessages = [
  { id: 1, text: 'Ласкаво просимо до демонстрації повідомлень', sending: false },
  { id: 2, text: 'Це приклад оптимістичного оновлення', sending: false },
];

function MessageDemo() {
  const [messages, setMessages] = useState(initialMessages);
  const [draft, setDraft] = useState('');

  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    messages,
    (currentMessages, newMessage) => [...currentMessages, newMessage],
  );

  const handleSubmit = async (event) => {
    event.preventDefault();

    const text = draft.trim();
    if (!text) {
      return;
    }

    const tempMessage = { id: Date.now(), text, sending: true };
    addOptimisticMessage(tempMessage);
    setDraft('');

    await new Promise((resolve) => setTimeout(resolve, 700));

    setMessages((prev) => [...prev, { ...tempMessage, sending: false }]);
  };

  return (
    <Paper sx={{ p: 4 }} elevation={3}>
      <Typography variant="h4" gutterBottom>
        Демо повідомлень
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Після відправки повідомлення спочатку з&apos;являється оптимістичний стан, а потім він фіксується.
      </Typography>

      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 3 }}>
        <TextField
          fullWidth
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          placeholder="Напишіть повідомлення"
        />
        <Button type="submit" variant="contained" size="large">
          Надіслати
        </Button>
      </Box>

      <List>
        {optimisticMessages.map((message) => (
          <ListItem key={message.id} sx={{ bgcolor: 'grey.50', borderRadius: 2, mb: 1 }}>
            <Typography>
              {message.text}
              {message.sending && <Typography component="span" color="text.secondary"> (відправляється...)</Typography>}
            </Typography>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}

export default MessageDemo;
