import React from 'react';
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  Button,
  Stack,
  LinearProgress,
} from '@mui/material';
import {
  People,
  SwapHoriz,
  Warning,
  TrendingUp,
  Security,
  Support,
} from '@mui/icons-material';

const AdminDashboard = () => {
  // Simulación de datos - En producción estos vendrían de Redux/API
  const userMetrics = {
    total: 1250,
    active: 1180,
    new: 45,
    pending: 25,
  };

  const transactionMetrics = {
    total: 2500,
    volume: 15000000,
    currency: 'ARS',
    pending: 15,
  };

  const recentTransactions = [
    { id: 1, user: 'Juan Pérez', type: 'Transferencia', amount: 50000, status: 'completed', date: '2024-01-15' },
    { id: 2, user: 'María García', type: 'Depósito', amount: 75000, status: 'pending', date: '2024-01-15' },
    { id: 3, user: 'Carlos López', type: 'Retiro', amount: 25000, status: 'completed', date: '2024-01-14' },
  ];

  const alerts = [
    { id: 1, type: 'warning', message: 'Intento de acceso no autorizado', date: '2024-01-15' },
    { id: 2, type: 'info', message: 'Mantenimiento programado', date: '2024-01-16' },
  ];

  const supportTickets = [
    { id: 1, user: 'Ana Martínez', issue: 'Problema con transferencia', status: 'pending', priority: 'high' },
    { id: 2, user: 'Pedro Sánchez', issue: 'Actualización de datos', status: 'in_progress', priority: 'medium' },
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        {/* Métricas de Usuarios */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
                <Typography variant="h6" component="div">
                  Usuarios
                </Typography>
                <People />
              </Stack>
              <Typography variant="h4" component="div" gutterBottom>
                {userMetrics.total.toLocaleString()}
              </Typography>
              <List>
                <ListItem>
                  <ListItemText
                    primary="Usuarios Activos"
                    secondary={`${userMetrics.active.toLocaleString()} (${((userMetrics.active/userMetrics.total)*100).toFixed(1)}%)`}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Nuevos Usuarios (último mes)"
                    secondary={userMetrics.new.toLocaleString()}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Verificaciones Pendientes"
                    secondary={userMetrics.pending.toLocaleString()}
                  />
                </ListItem>
              </List>
              <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                Gestionar Usuarios
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Métricas de Transacciones */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
                <Typography variant="h6" component="div">
                  Transacciones
                </Typography>
                <SwapHoriz />
              </Stack>
              <Typography variant="h4" component="div" gutterBottom>
                ${transactionMetrics.volume.toLocaleString()} {transactionMetrics.currency}
              </Typography>
              <List>
                <ListItem>
                  <ListItemText
                    primary="Total de Transacciones"
                    secondary={transactionMetrics.total.toLocaleString()}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Transacciones Pendientes"
                    secondary={transactionMetrics.pending.toLocaleString()}
                  />
                </ListItem>
              </List>
              <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                Ver Detalles
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Alertas de Seguridad */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
                <Typography variant="h6" component="div">
                  Alertas de Seguridad
                </Typography>
                <Warning />
              </Stack>
              <List>
                {alerts.map((alert) => (
                  <ListItem key={alert.id}>
                    <ListItemText
                      primary={alert.message}
                      secondary={alert.date}
                    />
                  </ListItem>
                ))}
              </List>
              <Button variant="outlined" color="warning" fullWidth sx={{ mt: 2 }}>
                Ver Todas las Alertas
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Tickets de Soporte */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
                <Typography variant="h6" component="div">
                  Soporte Técnico
                </Typography>
                <Support />
              </Stack>
              <List>
                {supportTickets.map((ticket) => (
                  <ListItem key={ticket.id}>
                    <ListItemText
                      primary={ticket.user}
                      secondary={
                        <>
                          {ticket.issue}
                          <br />
                          <Typography
                            component="span"
                            variant="body2"
                            color={ticket.priority === 'high' ? 'error.main' : 'text.secondary'}
                          >
                            Prioridad: {ticket.priority}
                          </Typography>
                        </>
                      }
                    />
                  </ListItem>
                ))}
              </List>
              <Button variant="contained" color="secondary" fullWidth sx={{ mt: 2 }}>
                Gestionar Tickets
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AdminDashboard;