import { useOptimistic, useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  List,
  ListItem,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';

const initialMessages = [
  { id: 1, text: 'ривіт! Як справи?', sending: false },
  { id: 2, text: 'озпочинаємо навчання React', sending: false },
];

function Thread() {
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

    await new Promise((resolve) => setTimeout(resolve, 800));

    setMessages((prev) => [...prev, { ...tempMessage, sending: false }]);
  };

  return (
    <Paper sx={{ p: 4 }} elevation={3}>
      <Typography variant="h4" gutterBottom>
        Тема для обговорення
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Тут можна відправляти повідомлення у стилі чат-стрічки.
      </Typography>

      <Card variant="outlined" sx={{ mb: 3 }}>
        <CardContent>
          <List>
            {optimisticMessages.map((message) => (
              <ListItem key={message.id} sx={{ bgcolor: 'grey.50', borderRadius: 1, mb: 1 }}>
                <Box>
                  <Typography>{message.text}</Typography>
                  {message.sending && (
                    <Typography variant="caption" color="text.secondary">
                      (надсилається...)
                    </Typography>
                  )}
                </Box>
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>

      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
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
    </Paper>
  );
}

export default Thread;
