import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Container, AppBar, Toolbar, Typography, Button, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const PublicLayout = () => {
  const navigate = useNavigate();

  const navItems = [
    { label: 'Inicio', path: '/' },
    { label: 'Productos', path: '/products' },
    { label: 'Servicios', path: '/services' },
    { label: 'Sucursales', path: '/branches' },
    { label: 'Noticias', path: '/news' },
    { label: 'Contacto', path: '/contact' },
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="sticky" color="primary" elevation={0}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography
            variant="h6"
            component="div"
            sx={{ cursor: 'pointer' }}
            onClick={() => navigate('/')}
          >
            NOA BANK
          </Typography>

          <Stack direction="row" spacing={2}>
            {navItems.map((item) => (
              <Button
                key={item.path}
                color="inherit"
                onClick={() => navigate(item.path)}
              >
                {item.label}
              </Button>
            ))}
          </Stack>

          <Stack direction="row" spacing={2}>
            <Button
              color="inherit"
              variant="outlined"
              onClick={() => navigate('/login')}
            >
              Iniciar Sesión
            </Button>
            <Button
              color="secondary"
              variant="contained"
              onClick={() => navigate('/register')}
            >
              Registrarse
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>

      <Box component="main" sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>

      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="body2" color="text.secondary" align="center">
            © {new Date().getFullYear()} NOA BANK Argentina. Todos los derechos reservados.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default PublicLayout;