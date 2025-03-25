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
  Tabs,
  Tab,
  useTheme,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const productCategories = [
  {
    id: 'personal',
    label: 'Banca Personal',
    products: [
      {
        title: 'Cuenta Corriente Premium',
        description: 'Cuenta integral con beneficios exclusivos y tarjetas premium.',
        image: '/assets/current-account.svg',
        features: ['Sin costo de mantenimiento', 'Tarjetas Gold/Platinum', 'Inversiones personalizadas'],
      },
      {
        title: 'Préstamos Personales',
        description: 'Financiamiento flexible para sus proyectos personales.',
        image: '/assets/personal-loan.svg',
        features: ['Tasas competitivas', 'Plazos flexibles', 'Aprobación rápida'],
      },
      {
        title: 'Inversiones',
        description: 'Opciones de inversión para hacer crecer su patrimonio.',
        image: '/assets/investments.svg',
        features: ['Plazos fijos', 'Fondos comunes', 'Mercado de valores'],
      },
    ],
  },
  {
    id: 'business',
    label: 'Banca Empresarial',
    products: [
      {
        title: 'Cuenta Empresa',
        description: 'Soluciones financieras integrales para su negocio.',
        image: '/assets/business-account.svg',
        features: ['Gestión de flujo de caja', 'Pagos a proveedores', 'Comercio exterior'],
      },
      {
        title: 'Financiamiento PyME',
        description: 'Créditos diseñados para el crecimiento empresarial.',
        image: '/assets/business-loan.svg',
        features: ['Capital de trabajo', 'Inversión en equipamiento', 'Expansión comercial'],
      },
      {
        title: 'Servicios Corporativos',
        description: 'Soluciones a medida para grandes empresas.',
        image: '/assets/corporate-services.svg',
        features: ['Cash management', 'Comercio exterior', 'Banca de inversión'],
      },
    ],
  },
  {
    id: 'agro',
    label: 'Agronegocios',
    products: [
      {
        title: 'Financiamiento Agrícola',
        description: 'Créditos especializados para el sector agropecuario.',
        image: '/assets/agro-finance.svg',
        features: ['Siembra y cosecha', 'Compra de maquinaria', 'Infraestructura rural'],
      },
      {
        title: 'Seguros Agrícolas',
        description: 'Protección integral para su producción.',
        image: '/assets/agro-insurance.svg',
        features: ['Cobertura climática', 'Protección de cultivos', 'Seguro ganadero'],
      },
      {
        title: 'Servicios Especializados',
        description: 'Asesoramiento y servicios para el campo.',
        image: '/assets/agro-services.svg',
        features: ['Mercado de granos', 'Comercio exterior', 'Asesoría especializada'],
      },
    ],
  },
];

const Products = () => {
  const [selectedTab, setSelectedTab] = React.useState(0);
  const theme = useTheme();
  const navigate = useNavigate();

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Box sx={{ py: { xs: 4, md: 8 } }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          align="center"
          sx={{ mb: 6, fontWeight: 'bold' }}
        >
          Nuestros Productos
        </Typography>

        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
          <Tabs
            value={selectedTab}
            onChange={handleTabChange}
            variant="fullWidth"
            indicatorColor="primary"
            textColor="primary"
            aria-label="product categories"
          >
            {productCategories.map((category) => (
              <Tab
                key={category.id}
                label={category.label}
                sx={{ textTransform: 'none', fontSize: '1.1rem' }}
              />
            ))}
          </Tabs>
        </Box>

        {productCategories.map((category, index) => (
          <Box
            key={category.id}
            role="tabpanel"
            hidden={selectedTab !== index}
            id={`tabpanel-${category.id}`}
            aria-labelledby={`tab-${category.id}`}
          >
            {selectedTab === index && (
              <Grid container spacing={4}>
                {category.products.map((product, productIndex) => (
                  <Grid item xs={12} md={4} key={productIndex}>
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
                        image={product.image}
                        alt={product.title}
                        sx={{ objectFit: 'contain', p: 2 }}
                      />
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="h3"
                          sx={{ fontWeight: 'bold' }}
                        >
                          {product.title}
                        </Typography>
                        <Typography
                          variant="body1"
                          color="text.secondary"
                          sx={{ mb: 2 }}
                        >
                          {product.description}
                        </Typography>
                        <Box sx={{ mt: 2 }}>
                          {product.features.map((feature, featureIndex) => (
                            <Typography
                              key={featureIndex}
                              variant="body2"
                              sx={{
                                display: 'flex',
                                alignItems: 'center',
                                mb: 1,
                                '&:before': {
                                  content: '"•"',
                                  color: 'primary.main',
                                  fontWeight: 'bold',
                                  fontSize: '1.2rem',
                                  mr: 1,
                                },
                              }}
                            >
                              {feature}
                            </Typography>
                          ))}
                        </Box>
                      </CardContent>
                      <Box sx={{ p: 2, pt: 0 }}>
                        <Button
                          variant="contained"
                          color="primary"
                          fullWidth
                          onClick={() => navigate('/contact')}
                        >
                          Solicitar Información
                        </Button>
                      </Box>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            )}
          </Box>
        ))}
      </Container>
    </Box>
  );
};

export default Products;