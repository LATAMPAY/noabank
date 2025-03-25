import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Button,
  TextField,
  MenuItem,
  Pagination,
  useTheme,
} from '@mui/material';
import {
  CalendarToday as DateIcon,
  LocalOffer as CategoryIcon,
} from '@mui/icons-material';

const categories = [
  'Todos',
  'Institucional',
  'Productos',
  'Servicios',
  'Promociones',
  'Eventos',
  'Agro',
  'PyMEs',
];

const newsItems = [
  {
    id: 1,
    title: 'NOA BANK lanza nueva línea de créditos para el sector agrícola',
    summary: 'Financiamiento especial para productores del norte argentino con tasas preferenciales y plazos flexibles.',
    content: 'NOA BANK reafirma su compromiso con el sector agrícola...',
    image: '/assets/news/agro-credit.svg',
    date: '2023-08-15',
    category: 'Agro',
    featured: true,
  },
  {
    id: 2,
    title: 'Inauguración de nueva sucursal en Salta',
    summary: 'Ampliamos nuestra presencia en el noroeste argentino con una moderna sucursal en el centro de Salta.',
    content: 'Como parte de nuestro plan de expansión...',
    image: '/assets/news/new-branch.svg',
    date: '2023-08-10',
    category: 'Institucional',
    featured: true,
  },
  {
    id: 3,
    title: 'Programa de beneficios para PyMEs',
    summary: 'Nuevos beneficios y descuentos exclusivos para pequeñas y medianas empresas.',
    content: 'Pensando en el crecimiento de las PyMEs...',
    image: '/assets/news/pyme-benefits.svg',
    date: '2023-08-05',
    category: 'PyMEs',
    featured: false,
  },
  {
    id: 4,
    title: 'Actualización de nuestra banca digital',
    summary: 'Mejoras en la plataforma online para una experiencia más intuitiva y segura.',
    content: 'Continuamos innovando en servicios digitales...',
    image: '/assets/news/digital-update.svg',
    date: '2023-08-01',
    category: 'Servicios',
    featured: false,
  },
  {
    id: 5,
    title: 'NOA BANK presente en Expo Tucumán 2023',
    summary: 'Participamos en la feria más importante del norte argentino presentando nuestras soluciones financieras.',
    content: 'Del 20 al 25 de agosto estaremos presentes...',
    image: '/assets/news/expo-event.svg',
    date: '2023-07-28',
    category: 'Eventos',
    featured: false,
  },
];

const News = () => {
  const theme = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const filteredNews = selectedCategory === 'Todos'
    ? newsItems
    : newsItems.filter(item => item.category === selectedCategory);

  const featuredNews = filteredNews.filter(item => item.featured);
  const regularNews = filteredNews.filter(item => !item.featured);

  const paginatedNews = regularNews.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('es-AR', options);
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
            Noticias y Novedades
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
            Manténgase informado sobre las últimas novedades de NOA BANK y el sector financiero
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg">
        {/* Category Filter */}
        <Box sx={{ mb: 4 }}>
          <TextField
            select
            label="Filtrar por Categoría"
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
              setCurrentPage(1);
            }}
            sx={{ minWidth: 200 }}
          >
            {categories.map((category) => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </TextField>
        </Box>

        {/* Featured News */}
        {currentPage === 1 && featuredNews.length > 0 && (
          <Box sx={{ mb: 6 }}>
            <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold' }}>
              Noticias Destacadas
            </Typography>
            <Grid container spacing={4}>
              {featuredNews.map((news) => (
                <Grid item xs={12} md={6} key={news.id}>
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
                      height="300"
                      image={news.image}
                      alt={news.title}
                      sx={{ objectFit: 'cover' }}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Box sx={{ mb: 2 }}>
                        <Chip
                          icon={<CategoryIcon />}
                          label={news.category}
                          color="primary"
                          size="small"
                          sx={{ mr: 1 }}
                        />
                        <Chip
                          icon={<DateIcon />}
                          label={formatDate(news.date)}
                          size="small"
                          variant="outlined"
                        />
                      </Box>
                      <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: 'bold' }}>
                        {news.title}
                      </Typography>
                      <Typography color="text.secondary" paragraph>
                        {news.summary}
                      </Typography>
                      <Button variant="outlined" color="primary">
                        Leer más
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}

        {/* Regular News Grid */}
        <Grid container spacing={4}>
          {paginatedNews.map((news) => (
            <Grid item xs={12} sm={6} md={4} key={news.id}>
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
                  image={news.image}
                  alt={news.title}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ mb: 2 }}>
                    <Chip
                      icon={<CategoryIcon />}
                      label={news.category}
                      color="primary"
                      size="small"
                      sx={{ mr: 1 }}
                    />
                    <Chip
                      icon={<DateIcon />}
                      label={formatDate(news.date)}
                      size="small"
                      variant="outlined"
                    />
                  </Box>
                  <Typography variant="h6" component="h3" sx={{ mb: 2, fontWeight: 'bold' }}>
                    {news.title}
                  </Typography>
                  <Typography color="text.secondary" paragraph>
                    {news.summary}
                  </Typography>
                  <Button variant="outlined" color="primary">
                    Leer más
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Pagination */}
        {regularNews.length > itemsPerPage && (
          <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
            <Pagination
              count={Math.ceil(regularNews.length / itemsPerPage)}
              page={currentPage}
              onChange={handlePageChange}
              color="primary"
              size="large"
            />
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default News;