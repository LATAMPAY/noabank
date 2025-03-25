import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
} from '@mui/material';
import {
  CheckCircle as CheckIcon,
  Speed as SpeedIcon,
  Security as SecurityIcon,
  Devices as DevicesIcon,
  Support as SupportIcon,
  AccountBalance as BankIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const services = [
  {
    title: 'Banca Digital',
    description: 'Acceda a sus cuentas y realice operaciones desde cualquier lugar.',
    icon: DevicesIcon,
    features: [
      'Acceso 24/7 a sus cuentas',
      'Transferencias inmediatas',
      'Pago de servicios',
      'Gestión de tarjetas',
    ],
    image: '/assets/digital-banking.svg',
  },
  {
    title: 'Banca Corporativa',
    description: 'Soluciones financieras integrales para empresas.',
    icon: BankIcon,
    features: [
      'Cash management',
      'Financiamiento empresarial',
      'Comercio exterior',
      'Servicios de tesorería',
    ],
    image: '/assets/corporate-banking.svg',
  },
  {
    title: 'Inversiones',
    description: 'Diversifique su cartera con nuestras opciones de inversión.',
    icon: SpeedIcon,
    features: [
      'Fondos de inversión',
      'Mercado de capitales',
      'Asesoramiento personalizado',
      'Gestión de patrimonio',
    ],
    image: '/assets/investments.svg',
  },
];

const additionalFeatures = [
  {
    title: 'Seguridad Avanzada',
    description: 'Protección de última generación para sus operaciones bancarias.',
    icon: SecurityIcon,
  },
  {
    title: 'Soporte 24/7',
    description: 'Asistencia profesional disponible en todo momento.',
    icon: SupportIcon,
  },
  {
    title: 'Calidad Garantizada',
    description: 'Servicios bancarios que cumplen con los más altos estándares.',
    icon: CheckIcon,
  },
];

const Services = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Box sx={{ py: { xs: 4, md: 8 } }}>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: { xs: 6, md: 10 },
          mb: 6,
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{
              fontWeight: 'bold',
              mb: 3,
              textAlign: 'center',
            }}
          >
            Nuestros Servicios Financieros
          </Typography>
          <Typography
            variant="h5"
            sx={{
              textAlign: 'center',
              maxWidth: 800,
              mx: 'auto',
              opacity: 0.9,
            }}
          >
            Soluciones bancarias integrales diseñadas para satisfacer todas sus necesidades financieras
          </Typography>
        </Container>
      </Box>

      {/* Main Services */}
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    transition: 'transform 0.3s ease-in-out',
                    boxShadow: theme.shadows[4],
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={service.image}
                  alt={service.title}
                  sx={{ objectFit: 'contain', p: 2 }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      mb: 2,
                    }}
                  >
                    {React.createElement(service.icon, {
                      sx: { fontSize: 40, color: 'primary.main', mr: 2 },
                    })}
                    <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold' }}>
                      {service.title}
                    </Typography>
                  </Box>
                  <Typography color="text.secondary" paragraph>
                    {service.description}
                  </Typography>
                  <List>
                    {service.features.map((feature, featureIndex) => (
                      <ListItem key={featureIndex} sx={{ py: 0.5 }}>
                        <ListItemIcon sx={{ minWidth: 36 }}>
                          <CheckIcon color="primary" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary={feature} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
                <Box sx={{ p: 2, pt: 0 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={() => navigate('/contact')}
                  >
                    Más Información
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Additional Features */}
        <Box sx={{ mt: 8 }}>
          <Typography
            variant="h3"
            align="center"
            sx={{ mb: 6, fontWeight: 'bold' }}
          >
            ¿Por qué elegirnos?
          </Typography>
          <Grid container spacing={4}>
            {additionalFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Grid item xs={12} md={4} key={index}>
                  <Card
                    sx={{
                      height: '100%',
                      textAlign: 'center',
                      p: 3,
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        transition: 'transform 0.3s ease-in-out',
                      },
                    }}
                  >
                    <Icon
                      sx={{
                        fontSize: 60,
                        color: 'primary.main',
                        mb: 2,
                      }}
                    />
                    <Typography
                      variant="h5"
                      component="h3"
                      sx={{ mb: 2, fontWeight: 'bold' }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography color="text.secondary">
                      {feature.description}
                    </Typography>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Box>

        {/* CTA Section */}
        <Box
          sx={{
            mt: 8,
            p: { xs: 3, md: 6 },
            textAlign: 'center',
            bgcolor: 'primary.light',
            borderRadius: 2,
            color: 'white',
          }}
        >
          <Typography variant="h3" sx={{ mb: 3, fontWeight: 'bold' }}>
            ¿Listo para comenzar?
          </Typography>
          <Typography sx={{ mb: 4, fontSize: '1.25rem' }}>
            Únase a miles de clientes satisfechos que confían en NOA BANK
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={() => navigate('/register')}
            sx={{ mr: 2 }}
          >
            Abrir Cuenta
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            size="large"
            onClick={() => navigate('/contact')}
          >
            Contactar un Asesor
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Services;