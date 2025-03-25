import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  MenuItem,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
} from '@mui/material';
import {
  LocationOn as LocationIcon,
  Phone as PhoneIcon,
  AccessTime as TimeIcon,
  DirectionsCar as ParkingIcon,
  Atm as AtmIcon,
} from '@mui/icons-material';

const provinces = [
  'Tucumán',
  'Salta',
  'Jujuy',
  'Santiago del Estero',
  'Catamarca',
  'La Rioja',
];

const branches = [
  {
    id: 1,
    name: 'Casa Central',
    address: 'Av. San Martín 850',
    city: 'San Miguel de Tucumán',
    province: 'Tucumán',
    phone: '0381-4500000',
    hours: 'Lunes a Viernes: 10:00 - 15:00\nSábados: 9:00 - 13:00',
    features: ['Estacionamiento', 'Cajeros 24hs', 'Caja de Seguridad'],
    coordinates: { lat: -26.8241, lng: -65.2226 },
  },
  {
    id: 2,
    name: 'Sucursal Yerba Buena',
    address: 'Av. Aconquija 1700',
    city: 'Yerba Buena',
    province: 'Tucumán',
    phone: '0381-4250000',
    hours: 'Lunes a Viernes: 10:00 - 15:00',
    features: ['Estacionamiento', 'Cajeros 24hs'],
    coordinates: { lat: -26.8167, lng: -65.2833 },
  },
  {
    id: 3,
    name: 'Sucursal Salta Centro',
    address: 'Caseros 625',
    city: 'Salta',
    province: 'Salta',
    phone: '0387-4310000',
    hours: 'Lunes a Viernes: 10:00 - 15:00',
    features: ['Cajeros 24hs', 'Caja de Seguridad'],
    coordinates: { lat: -24.7859, lng: -65.4117 },
  },
  {
    id: 4,
    name: 'Sucursal San Salvador',
    address: 'Belgrano 1200',
    city: 'San Salvador de Jujuy',
    province: 'Jujuy',
    phone: '0388-4220000',
    hours: 'Lunes a Viernes: 10:00 - 15:00',
    features: ['Estacionamiento', 'Cajeros 24hs'],
    coordinates: { lat: -24.1858, lng: -65.2995 },
  },
];

const Branches = () => {
  const theme = useTheme();
  const [selectedProvince, setSelectedProvince] = useState('all');

  const filteredBranches = selectedProvince === 'all'
    ? branches
    : branches.filter(branch => branch.province === selectedProvince);

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
            Nuestras Sucursales
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
            Encuentre la sucursal más cercana y descubra todos nuestros servicios bancarios
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg">
        {/* Filter Section */}
        <Box sx={{ mb: 4 }}>
          <TextField
            select
            label="Filtrar por Provincia"
            value={selectedProvince}
            onChange={(e) => setSelectedProvince(e.target.value)}
            sx={{ minWidth: 200 }}
          >
            <MenuItem value="all">Todas las Provincias</MenuItem>
            {provinces.map((province) => (
              <MenuItem key={province} value={province}>
                {province}
              </MenuItem>
            ))}
          </TextField>
        </Box>

        {/* Branches Grid */}
        <Grid container spacing={4}>
          {filteredBranches.map((branch) => (
            <Grid item xs={12} md={6} key={branch.id}>
              <Card
                sx={{
                  height: '100%',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    transition: 'transform 0.3s ease-in-out',
                    boxShadow: theme.shadows[4],
                  },
                }}
              >
                <CardContent>
                  <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
                    {branch.name}
                  </Typography>

                  <List sx={{ py: 0 }}>
                    <ListItem sx={{ px: 0 }}>
                      <ListItemIcon>
                        <LocationIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText
                        primary={branch.address}
                        secondary={`${branch.city}, ${branch.province}`}
                      />
                    </ListItem>

                    <ListItem sx={{ px: 0 }}>
                      <ListItemIcon>
                        <PhoneIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary={branch.phone} />
                    </ListItem>

                    <ListItem sx={{ px: 0 }}>
                      <ListItemIcon>
                        <TimeIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText
                        primary="Horario de Atención"
                        secondary={branch.hours}
                      />
                    </ListItem>

                    <ListItem sx={{ px: 0 }}>
                      <ListItemIcon>
                        {branch.features.includes('Estacionamiento') ? (
                          <ParkingIcon color="primary" />
                        ) : (
                          <AtmIcon color="primary" />
                        )}
                      </ListItemIcon>
                      <ListItemText
                        primary="Servicios Disponibles"
                        secondary={branch.features.join(' • ')}
                      />
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Map Section */}
        <Box
          sx={{
            mt: 6,
            height: 400,
            bgcolor: 'grey.200',
            borderRadius: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography color="text.secondary">
            Mapa interactivo de sucursales (Integración con Google Maps pendiente)
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Branches;