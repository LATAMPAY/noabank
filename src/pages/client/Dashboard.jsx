import React, { useState, useEffect } from 'react';
import { Box, Grid, Paper, Typography, Button, CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux';
import { accountService } from '../../services/api';

const Dashboard = () => {
  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const data = await accountService.getAccounts();
        setAccounts(data);
        setLoading(false);
      } catch (err) {
        setError('Error al cargar las cuentas');
        setLoading(false);
      }
    };

    fetchAccounts();
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ mt: 4 }}>
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Bienvenido, {user?.firstName}
      </Typography>

      <Grid container spacing={3}>
        {/* Resumen de Cuentas */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Tus Cuentas
            </Typography>
            <Grid container spacing={2}>
              {accounts.map((account) => (
                <Grid item xs={12} md={4} key={account.id}>
                  <Paper sx={{ p: 2, bgcolor: 'background.default' }}>
                    <Typography variant="subtitle1" gutterBottom>
                      {account.type}
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                      ${account.balance.toFixed(2)}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {account.accountNumber}
                    </Typography>
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{ mt: 1 }}
                      fullWidth
                    >
                      Ver Detalles
                    </Button>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>

        {/* Acciones Rápidas */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Acciones Rápidas
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <Button variant="contained" fullWidth>
                  Nueva Transferencia
                </Button>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Button variant="contained" fullWidth>
                  Pagar Servicios
                </Button>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Button variant="contained" fullWidth>
                  Ver Estados de Cuenta
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard; 