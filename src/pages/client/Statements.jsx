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
  TextField,
  MenuItem,
  Grid,
} from '@mui/material';
import { accountService } from '../../services/api';

const Statements = () => {
  const [accounts, setAccounts] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [selectedAccount, setSelectedAccount] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dateRange, setDateRange] = useState({
    startDate: '',
    endDate: '',
  });

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

  useEffect(() => {
    const fetchTransactions = async () => {
      if (selectedAccount) {
        try {
          setLoading(true);
          const data = await accountService.getTransactions(selectedAccount);
          setTransactions(data);
          setLoading(false);
        } catch (err) {
          setError('Error al cargar las transacciones');
          setLoading(false);
        }
      }
    };

    fetchTransactions();
  }, [selectedAccount]);

  const handleAccountChange = (event) => {
    setSelectedAccount(event.target.value);
  };

  const handleDateChange = (event) => {
    setDateRange({
      ...dateRange,
      [event.target.name]: event.target.value,
    });
  };

  if (loading && !selectedAccount) {
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
      <Typography variant="h4" gutterBottom>
        Estados de Cuenta
      </Typography>

      <Paper sx={{ p: 3, mb: 3 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <TextField
              select
              fullWidth
              label="Seleccionar Cuenta"
              value={selectedAccount}
              onChange={handleAccountChange}
            >
              {accounts.map((account) => (
                <MenuItem key={account.id} value={account.id}>
                  {account.type} - {account.accountNumber}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              type="date"
              fullWidth
              label="Fecha Inicio"
              name="startDate"
              value={dateRange.startDate}
              onChange={handleDateChange}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              type="date"
              fullWidth
              label="Fecha Fin"
              name="endDate"
              value={dateRange.endDate}
              onChange={handleDateChange}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12} md={2}>
            <Button
              variant="contained"
              fullWidth
              sx={{ height: '56px' }}
            >
              Descargar PDF
            </Button>
          </Grid>
        </Grid>
      </Paper>

      {selectedAccount && (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Fecha</TableCell>
                <TableCell>Descripción</TableCell>
                <TableCell>Tipo</TableCell>
                <TableCell align="right">Monto</TableCell>
                <TableCell align="right">Saldo</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={5} align="center">
                    <CircularProgress />
                  </TableCell>
                </TableRow>
              ) : (
                transactions.map((transaction) => (
                  <TableRow key={transaction.id}>
                    <TableCell>
                      {new Date(transaction.date).toLocaleDateString()}
                    </TableCell>
                    <TableCell>{transaction.description}</TableCell>
                    <TableCell>{transaction.type}</TableCell>
                    <TableCell align="right">
                      <Typography
                        sx={{
                          color:
                            transaction.type === 'debit'
                              ? 'error.main'
                              : 'success.main',
                        }}
                      >
                        {transaction.type === 'debit' ? '-' : '+'}$
                        {Math.abs(transaction.amount).toFixed(2)}
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      ${transaction.balance.toFixed(2)}
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};

export default Statements; 