import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  MenuItem,
  Grid,
  Chip,
  IconButton,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import {
  Visibility as VisibilityIcon,
  Flag as FlagIcon,
  CheckCircle as CheckCircleIcon,
} from '@mui/icons-material';

// Datos de ejemplo
const mockTransactions = [
  {
    id: 1,
    date: '2024-03-24 10:30',
    type: 'transfer',
    amount: 5000,
    status: 'completed',
    fromAccount: '1234-5678',
    toAccount: '8765-4321',
    user: 'Juan Pérez',
    risk: 'low',
  },
  {
    id: 2,
    date: '2024-03-24 10:15',
    type: 'withdrawal',
    amount: 15000,
    status: 'pending',
    fromAccount: '2345-6789',
    toAccount: '-',
    user: 'María García',
    risk: 'high',
  },
  {
    id: 3,
    date: '2024-03-24 09:45',
    type: 'deposit',
    amount: 25000,
    status: 'flagged',
    fromAccount: '-',
    toAccount: '3456-7890',
    user: 'Carlos López',
    risk: 'medium',
  },
];

const TransactionMonitoring = () => {
  const [transactions] = useState(mockTransactions);
  const [filters, setFilters] = useState({
    status: '',
    risk: '',
    type: '',
  });
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  const handleFilterChange = (event) => {
    setFilters({
      ...filters,
      [event.target.name]: event.target.value,
    });
  };

  const handleViewDetails = (transaction) => {
    setSelectedTransaction(transaction);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedTransaction(null);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'success';
      case 'pending':
        return 'warning';
      case 'flagged':
        return 'error';
      default:
        return 'default';
    }
  };

  const getRiskColor = (risk) => {
    switch (risk) {
      case 'high':
        return 'error';
      case 'medium':
        return 'warning';
      case 'low':
        return 'success';
      default:
        return 'default';
    }
  };

  const filteredTransactions = transactions.filter((transaction) => {
    return (
      (!filters.status || transaction.status === filters.status) &&
      (!filters.risk || transaction.risk === filters.risk) &&
      (!filters.type || transaction.type === filters.type)
    );
  });

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Monitoreo de Transacciones
      </Typography>

      {/* Filtros */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <TextField
              select
              fullWidth
              label="Estado"
              name="status"
              value={filters.status}
              onChange={handleFilterChange}
            >
              <MenuItem value="">Todos</MenuItem>
              <MenuItem value="completed">Completada</MenuItem>
              <MenuItem value="pending">Pendiente</MenuItem>
              <MenuItem value="flagged">Marcada</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              select
              fullWidth
              label="Riesgo"
              name="risk"
              value={filters.risk}
              onChange={handleFilterChange}
            >
              <MenuItem value="">Todos</MenuItem>
              <MenuItem value="low">Bajo</MenuItem>
              <MenuItem value="medium">Medio</MenuItem>
              <MenuItem value="high">Alto</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              select
              fullWidth
              label="Tipo"
              name="type"
              value={filters.type}
              onChange={handleFilterChange}
            >
              <MenuItem value="">Todos</MenuItem>
              <MenuItem value="transfer">Transferencia</MenuItem>
              <MenuItem value="withdrawal">Retiro</MenuItem>
              <MenuItem value="deposit">Depósito</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} md={3}>
            <Button
              variant="outlined"
              fullWidth
              onClick={() => setFilters({ status: '', risk: '', type: '' })}
            >
              Limpiar Filtros
            </Button>
          </Grid>
        </Grid>
      </Paper>

      {/* Tabla de Transacciones */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Fecha</TableCell>
              <TableCell>Usuario</TableCell>
              <TableCell>Tipo</TableCell>
              <TableCell>Monto</TableCell>
              <TableCell>Estado</TableCell>
              <TableCell>Riesgo</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredTransactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell>{transaction.date}</TableCell>
                <TableCell>{transaction.user}</TableCell>
                <TableCell>{transaction.type}</TableCell>
                <TableCell>${transaction.amount.toFixed(2)}</TableCell>
                <TableCell>
                  <Chip
                    label={transaction.status}
                    color={getStatusColor(transaction.status)}
                    size="small"
                  />
                </TableCell>
                <TableCell>
                  <Chip
                    label={transaction.risk}
                    color={getRiskColor(transaction.risk)}
                    size="small"
                  />
                </TableCell>
                <TableCell>
                  <IconButton
                    size="small"
                    onClick={() => handleViewDetails(transaction)}
                    sx={{ mr: 1 }}
                  >
                    <VisibilityIcon />
                  </IconButton>
                  <IconButton
                    size="small"
                    color="warning"
                    sx={{ mr: 1 }}
                  >
                    <FlagIcon />
                  </IconButton>
                  <IconButton
                    size="small"
                    color="success"
                  >
                    <CheckCircleIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Diálogo de Detalles */}
      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
        <DialogTitle>Detalles de la Transacción</DialogTitle>
        <DialogContent>
          {selectedTransaction && (
            <Box sx={{ pt: 2 }}>
              <Typography variant="subtitle2">ID de Transacción</Typography>
              <Typography paragraph>{selectedTransaction.id}</Typography>

              <Typography variant="subtitle2">Fecha y Hora</Typography>
              <Typography paragraph>{selectedTransaction.date}</Typography>

              <Typography variant="subtitle2">Usuario</Typography>
              <Typography paragraph>{selectedTransaction.user}</Typography>

              <Typography variant="subtitle2">Cuenta Origen</Typography>
              <Typography paragraph>{selectedTransaction.fromAccount}</Typography>

              <Typography variant="subtitle2">Cuenta Destino</Typography>
              <Typography paragraph>{selectedTransaction.toAccount}</Typography>

              <Typography variant="subtitle2">Monto</Typography>
              <Typography paragraph>${selectedTransaction.amount.toFixed(2)}</Typography>

              <Typography variant="subtitle2">Estado</Typography>
              <Chip
                label={selectedTransaction.status}
                color={getStatusColor(selectedTransaction.status)}
                size="small"
              />

              <Typography variant="subtitle2" sx={{ mt: 2 }}>Nivel de Riesgo</Typography>
              <Chip
                label={selectedTransaction.risk}
                color={getRiskColor(selectedTransaction.risk)}
                size="small"
              />
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cerrar</Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleCloseDialog}
          >
            Aprobar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default TransactionMonitoring; 