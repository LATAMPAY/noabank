import React from 'react';
import { Box, Typography, Button, Grid, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ mt: 4 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Bienvenido a NOA Bank
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          Tu banco digital de confianza
        </Typography>
        <Button
          variant="contained"
          size="large"
          onClick={() => navigate('/register')}
          sx={{ mt: 2 }}
        >
          Comienza Ahora
        </Button>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, textAlign: 'center' }}>
            <Typography variant="h6" gutterBottom>
              Cuentas Digitales
            </Typography>
            <Typography color="text.secondary">
              Administra tu dinero de forma fácil y segura con nuestras cuentas digitales.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, textAlign: 'center' }}>
            <Typography variant="h6" gutterBottom>
              Transferencias Instantáneas
            </Typography>
            <Typography color="text.secondary">
              Envía y recibe dinero en tiempo real, sin comisiones entre cuentas NOA Bank.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, textAlign: 'center' }}>
            <Typography variant="h6" gutterBottom>
              Seguridad Garantizada
            </Typography>
            <Typography color="text.secondary">
              Tu dinero está protegido con la más alta tecnología en seguridad bancaria.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;