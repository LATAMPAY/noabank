import React, { useState, useEffect } from 'react';
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
  Button,
  CircularProgress,
  Alert,
  Chip,
} from '@mui/material';
import { accountService } from '../../services/api';

const Accounts = () => {
  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const data = await accountService.getAccounts();
        setAccounts(data);
        setLoading(false);
      } catch (err) {
        setError('Error al cargar las cuentas');
        setLoading(false);
      }
    };

    fetchAccounts();
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return 'success';
      case 'inactive':
        return 'error';
      case 'pending':
        return 'warning';
      default:
        return 'default';
    }
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ mt: 4 }}>
        <Alert severity="error">{error}</Alert>
      </Box>
    );
  }

  return (
    <Box sx={{ mt: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Typography variant="h4" gutterBottom>
          Mis Cuentas
        </Typography>
        <Button variant="contained" color="primary">
          Nueva Cuenta
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Tipo de Cuenta</TableCell>
              <TableCell>Número de Cuenta</TableCell>
              <TableCell>Saldo</TableCell>
              <TableCell>Estado</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {accounts.map((account) => (
              <TableRow key={account.id}>
                <TableCell>{account.type}</TableCell>
                <TableCell>{account.accountNumber}</TableCell>
                <TableCell>
                  <Typography
                    sx={{
                      color: account.balance < 0 ? 'error.main' : 'success.main',
                      fontWeight: 'bold',
                    }}
                  >
                    ${account.balance.toFixed(2)}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Chip
                    label={account.status}
                    color={getStatusColor(account.status)}
                    size="small"
                  />
                </TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{ mr: 1 }}
                  >
                    Ver Detalles
                  </Button>
                  <Button
                    variant="contained"
                    size="small"
                    color="primary"
                  >
                    Transferir
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Accounts; 