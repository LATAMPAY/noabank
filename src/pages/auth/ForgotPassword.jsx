import React, { useState } from 'react';
import { Box, Container, TextField, Button, Typography, Alert } from '@mui/material';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Aquí iría la lógica para recuperar la contraseña
      setMessage('Si el correo existe, recibirás instrucciones para restablecer tu contraseña.');
      setError('');
    } catch (err) {
      setError('Ocurrió un error. Por favor, intenta nuevamente.');
      setMessage('');
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Recuperar Contraseña
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          {message && <Alert severity="success">{message}</Alert>}
          {error && <Alert severity="error">{error}</Alert>}
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Correo Electrónico"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Enviar Instrucciones
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ForgotPassword; 