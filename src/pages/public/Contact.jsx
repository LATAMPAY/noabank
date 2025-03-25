import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  MenuItem,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Snackbar,
  Alert,
  useTheme,
} from '@mui/material';
import {
  Phone as PhoneIcon,
  Email as EmailIcon,
  LocationOn as LocationIcon,
  WhatsApp as WhatsAppIcon,
  AccessTime as TimeIcon,
} from '@mui/icons-material';

const contactInfo = [
  {
    icon: PhoneIcon,
    title: 'Teléfono',
    primary: '0800-333-NOA (662)',
    secondary: 'Atención al Cliente 24/7',
  },
  {
    icon: WhatsAppIcon,
    title: 'WhatsApp',
    primary: '+54 9 11 5555-5555',
    secondary: 'Lunes a Viernes 8:00 - 20:00',
  },
  {
    icon: EmailIcon,
    title: 'Email',
    primary: 'contacto@noabank.com.ar',
    secondary: 'Respuesta en 24-48 horas',
  },
  {
    icon: LocationIcon,
    title: 'Casa Central',
    primary: 'Av. San Martín 850, San Miguel de Tucumán',
    secondary: 'Tucumán, Argentina',
  },
  {
    icon: TimeIcon,
    title: 'Horario de Atención',
    primary: 'Lunes a Viernes: 10:00 - 15:00',
    secondary: 'Sábados: 9:00 - 13:00',
  },
];

const inquiryTypes = [
  'Información General',
  'Cuentas Bancarias',
  'Tarjetas',
  'Préstamos',
  'Inversiones',
  'Banca Digital',
  'Reclamos',
  'Otros',
];

const Contact = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: '',
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    severity: 'success',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setSnackbar({
      open: true,
      severity: 'success',
      message: 'Mensaje enviado correctamente. Nos pondremos en contacto pronto.',
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      inquiryType: '',
      message: '',
    });
  };

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

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
            Contáctenos
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
            Estamos aquí para ayudarle. Nuestro equipo de atención al cliente está disponible para responder todas sus consultas.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Contact Information */}
          <Grid item xs={12} md={5}>
            <Card
              sx={{
                height: '100%',
                bgcolor: 'background.paper',
              }}
            >
              <CardContent>
                <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold' }}>
                  Información de Contacto
                </Typography>
                <List>
                  {contactInfo.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <ListItem key={index} sx={{ py: 2 }}>
                        <ListItemIcon>
                          <Icon
                            sx={{
                              color: 'primary.main',
                              fontSize: 28,
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary={
                            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                              {item.primary}
                            </Typography>
                          }
                          secondary={
                            <Typography color="text.secondary">
                              {item.secondary}
                            </Typography>
                          }
                        />
                      </ListItem>
                    );
                  })}
                </List>
              </CardContent>
            </Card>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <Card>
              <CardContent>
                <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold' }}>
                  Envíenos un Mensaje
                </Typography>
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Nombre y Apellido"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Teléfono"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        select
                        label="Tipo de Consulta"
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleChange}
                        required
                      >
                        {inquiryTypes.map((option) => (
                          <MenuItem key={option} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        multiline
                        rows={4}
                        label="Mensaje"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        size="large"
                        fullWidth
                      >
                        Enviar Mensaje
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;