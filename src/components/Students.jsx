import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Paper,
  TextField,
  Typography,
} from '@mui/material';

function Students({ students }) {
  const [name, setName] = useState('Світ');

  return (
    <Paper sx={{ p: 4 }} elevation={3}>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h4">{name}</Typography>
        <Typography variant="h6" color="text.secondary">
          Students
        </Typography>
        <Typography variant="body1" paragraph>
          Here is a simple React component showing student information.
        </Typography>
      </Box>

      <Grid container spacing={2} sx={{ mb: 3 }}>
        {students.map((student) => (
          <Grid item xs={12} sm={6} md={4} key={student.id}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {student.name}
                </Typography>
                <Typography>
                  <strong>Subject:</strong> {student.subject}
                </Typography>
                <Typography>
                  <strong>Grade:</strong> {student.grade}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center' }}>
        <Button variant="contained" onClick={() => setName('React Learner')}>
          Change Name
        </Button>
        <TextField
          label="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Box>
    </Paper>
  );
}
export default Students;
