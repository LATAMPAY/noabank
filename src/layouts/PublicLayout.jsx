import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box, AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const PublicLayout = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component={RouterLink} to="/" sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}>
            NOA Bank
          </Typography>
          <Button color="inherit" component={RouterLink} to="/products">
            Productos
          </Button>
          <Button color="inherit" component={RouterLink} to="/services">
            Servicios
          </Button>
          <Button color="inherit" component={RouterLink} to="/contact">
            Contacto
          </Button>
          <Button color="inherit" component={RouterLink} to="/login">
            Iniciar Sesión
          </Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Box sx={{ mt: 4 }}>
          <Outlet />
        </Box>
      </Container>
    </>
  );
};

export default PublicLayout;