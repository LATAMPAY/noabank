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
  IconButton,
  Stack,
} from '@mui/material';
import {
  AccountBalance,
  TrendingUp,
  SwapHoriz,
  Notifications,
  CreditCard,
  Receipt,
} from '@mui/icons-material';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  // Simulación de datos - En producción estos vendrían de Redux/API
  const balanceData = {
    total: 150000,
    currency: 'ARS',
    accounts: [
      { id: 1, type: 'Caja de Ahorro', balance: 75000 },
      { id: 2, type: 'Cuenta Corriente', balance: 75000 },
    ],
  };

  const recentTransactions = [
    { id: 1, type: 'Transferencia', amount: -5000, date: '2024-01-15', description: 'Pago de servicios' },
    { id: 2, type: 'Depósito', amount: 15000, date: '2024-01-14', description: 'Depósito en efectivo' },
    { id: 3, type: 'Débito', amount: -2500, date: '2024-01-13', description: 'Compra en comercio' },
  ];

  const investments = [
    { id: 1, type: 'Plazo Fijo', amount: 50000, rate: '97%', maturity: '2024-02-15' },
    { id: 2, type: 'Fondos', amount: 25000, performance: '+5.2%', period: 'último mes' },
  ];

  const notifications = [
    { id: 1, type: 'info', message: 'Nuevo estado de cuenta disponible', date: '2024-01-15' },
    { id: 2, type: 'warning', message: 'Vencimiento próximo de tarjeta', date: '2024-01-14' },
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        {/* Balance Widget */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
                <Typography variant="h6" component="div">
                  Balance Total
                </Typography>
                <AccountBalance />
              </Stack>
              <Typography variant="h4" component="div" gutterBottom>
                ${balanceData.total.toLocaleString()} {balanceData.currency}
              </Typography>
              <List>
                {balanceData.accounts.map((account) => (
                  <ListItem key={account.id} disablePadding>
                    <ListItemText
                      primary={account.type}
                      secondary={`$${account.balance.toLocaleString()} ${balanceData.currency}`}
                    />
                  </ListItem>
                ))}
              </List>
              <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                Ver Detalle
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Inversiones Widget */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
                <Typography variant="h6" component="div">
                  Inversiones
                </Typography>
                <TrendingUp />
              </Stack>
              <List>
                {investments.map((investment) => (
                  <ListItem key={investment.id}>
                    <ListItemText
                      primary={investment.type}
                      secondary={
                        <>
                          ${investment.amount.toLocaleString()} {balanceData.currency}
                          <br />
                          {investment.rate ? `Tasa: ${investment.rate}` : `Rendimiento: ${investment.performance}`}
                        </>
                      }
                    />
                  </ListItem>
                ))}
              </List>
              <Button variant="outlined" color="primary" fullWidth sx={{ mt: 2 }}>
                Invertir
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Últimas Transacciones Widget */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
                <Typography variant="h6" component="div">
                  Últimas Transacciones
                </Typography>
                <SwapHoriz />
              </Stack>
              <List>
                {recentTransactions.map((transaction) => (
                  <React.Fragment key={transaction.id}>
                    <ListItem>
                      <ListItemText
                        primary={transaction.description}
                        secondary={transaction.date}
                      />
                      <Typography
                        variant="body2"
                        color={transaction.amount > 0 ? 'success.main' : 'error.main'}
                      >
                        {transaction.amount > 0 ? '+' : ''}
                        ${Math.abs(transaction.amount).toLocaleString()} {balanceData.currency}
                      </Typography>
                    </ListItem>
                    <Divider />
                  </React.Fragment>
                ))}
              </List>
              <Button variant="text" color="primary" fullWidth sx={{ mt: 2 }}>
                Ver Todas
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Notificaciones Widget */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
                <Typography variant="h6" component="div">
                  Notificaciones
                </Typography>
                <Notifications />
              </Stack>
              <List>
                {notifications.map((notification) => (
                  <ListItem key={notification.id}>
                    <ListItemText
                      primary={notification.message}
                      secondary={notification.date}
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;