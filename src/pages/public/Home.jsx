import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Stack,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  AccountBalance,
  Business,
  Agriculture,
  TrendingUp,
  Security,
  Support,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const features = [
  {
    icon: AccountBalance,
    title: 'Banca Personal',
    description: 'Soluciones financieras personalizadas para individuos y familias.',
  },
  {
    icon: Business,
    title: 'Banca Empresarial',
    description: 'Servicios especializados para PyMEs y grandes corporaciones.',
  },
  {
    icon: Agriculture,
    title: 'Sector Agroindustrial',
    description: 'Financiamiento y servicios adaptados al sector agropecuario.',
  },
  {
    icon: TrendingUp,
    title: 'Inversiones',
    description: 'Opciones de inversión para hacer crecer su patrimonio.',
  },
  {
    icon: Security,
    title: 'Seguridad Garantizada',
    description: 'Tecnología de última generación para proteger sus operaciones.',
  },
  {
    icon: Support,
    title: 'Soporte 24/7',
    description: 'Atención personalizada cuando la necesite.',
  },
];

const Home = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'primary.contrastText',
          py: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  fontWeight: 'bold',
                  mb: 2,
                }}
              >
                Bienvenido a NOA BANK
              </Typography>
              <Typography variant="h5" sx={{ mb: 4, opacity: 0.9 }}>
                Su socio financiero de confianza en el norte argentino
              </Typography>
              <Stack direction="row" spacing={2}>
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  onClick={() => navigate('/register')}
                >
                  Abrir Cuenta
                </Button>
                <Button
                  variant="outlined"
                  color="inherit"
                  size="large"
                  onClick={() => navigate('/products')}
                >
                  Conocer Más
                </Button>
              </Stack>
            </Grid>
            {!isMobile && (
              <Grid item md={6}>
                <Box
                  component="img"
                  src="/assets/banking-hero.svg"
                  alt="NOA BANK Services"
                  sx={{ width: '100%', maxWidth: 600 }}
                />
              </Grid>
            )}
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Typography
          variant="h2"
          align="center"
          sx={{ mb: 6, fontWeight: 'bold' }}
        >
          Nuestros Servicios
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      transition: 'transform 0.3s ease-in-out',
                    },
                  }}
                >
                  <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                    <Icon
                      sx={{
                        fontSize: 48,
                        color: 'primary.main',
                        mb: 2,
                      }}
                    />
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h3"
                      sx={{ fontWeight: 'bold' }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography color="text.secondary">
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>

      {/* CTA Section */}
      <Box sx={{ bgcolor: 'grey.100', py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Card
            sx={{
              p: { xs: 3, md: 5 },
              textAlign: 'center',
              backgroundColor: 'background.paper',
            }}
          >
            <Typography variant="h3" sx={{ mb: 3, fontWeight: 'bold' }}>
              Comience su Viaje Financiero Hoy
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, color: 'text.secondary' }}>
              Únase a miles de clientes que confían en NOA BANK para sus necesidades financieras
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={() => navigate('/contact')}
            >
              Contacte con Nosotros
            </Button>
          </Card>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;