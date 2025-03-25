import React from 'react';
import {
  Box,
  Grid,
  Paper,
  Typography,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';
import {
  AccountBalance as AccountIcon,
  People as PeopleIcon,
  SwapHoriz as TransferIcon,
  Warning as AlertIcon,
} from '@mui/icons-material';

const statsData = [
  {
    title: 'Total de Usuarios',
    value: '1,234',
    icon: PeopleIcon,
    color: '#1976d2',
  },
  {
    title: 'Cuentas Activas',
    value: '2,567',
    icon: AccountIcon,
    color: '#2e7d32',
  },
  {
    title: 'Transferencias Hoy',
    value: '456',
    icon: TransferIcon,
    color: '#ed6c02',
  },
  {
    title: 'Alertas Pendientes',
    value: '23',
    icon: AlertIcon,
    color: '#d32f2f',
  },
];

const recentActivities = [
  {
    type: 'Nueva Cuenta',
    user: 'Juan Pérez',
    time: 'Hace 5 minutos',
  },
  {
    type: 'Transferencia Grande',
    user: 'María García',
    time: 'Hace 15 minutos',
  },
  {
    type: 'Alerta de Seguridad',
    user: 'Sistema',
    time: 'Hace 30 minutos',
  },
  {
    type: 'Nuevo Usuario',
    user: 'Carlos López',
    time: 'Hace 1 hora',
  },
];

const AdminDashboard = () => {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Panel de Administración
      </Typography>

      {/* Estadísticas */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {statsData.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  height: '100%',
                }}
              >
                <Icon sx={{ fontSize: 40, color: stat.color, mb: 1 }} />
                <Typography variant="h4" component="div">
                  {stat.value}
                </Typography>
                <Typography color="text.secondary" variant="body2">
                  {stat.title}
                </Typography>
              </Paper>
            </Grid>
          );
        })}
      </Grid>

      <Grid container spacing={3}>
        {/* Actividad Reciente */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Actividad Reciente
              </Typography>
              <List>
                {recentActivities.map((activity, index) => (
                  <React.Fragment key={index}>
                    <ListItem>
                      <ListItemText
                        primary={activity.type}
                        secondary={
                          <>
                            <Typography
                              component="span"
                              variant="body2"
                              color="text.primary"
                            >
                              {activity.user}
                            </Typography>
                            {` — ${activity.time}`}
                          </>
                        }
                      />
                    </ListItem>
                    {index < recentActivities.length - 1 && <Divider />}
                  </React.Fragment>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Resumen del Sistema */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Estado del Sistema
              </Typography>
              <List>
                <ListItem>
                  <ListItemText
                    primary="Rendimiento del Servidor"
                    secondary="Óptimo - 98% uptime"
                  />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText
                    primary="Últimas Transacciones"
                    secondary="Procesadas correctamente"
                  />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText
                    primary="Base de Datos"
                    secondary="Funcionando normalmente"
                  />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText
                    primary="Seguridad"
                    secondary="Sin incidentes reportados"
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AdminDashboard; 