import React, { useState, useEffect } from 'react';
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Grid,
  MenuItem,
  CircularProgress,
  Alert,
  Stepper,
  Step,
  StepLabel,
} from '@mui/material';
import { accountService } from '../../services/api';

const steps = ['Seleccionar Cuentas', 'Detalles de Transferencia', 'Confirmar'];

const Transfers = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [transferData, setTransferData] = useState({
    sourceAccountId: '',
    destinationAccountId: '',
    amount: '',
    description: '',
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

  const handleChange = (e) => {
    setTransferData({
      ...transferData,
      [e.target.name]: e.target.value,
    });
  };

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await accountService.createTransfer(transferData);
      setActiveStep(3); // Éxito
    } catch (err) {
      setError('Error al realizar la transferencia');
    }
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                select
                fullWidth
                label="Cuenta Origen"
                name="sourceAccountId"
                value={transferData.sourceAccountId}
                onChange={handleChange}
                required
              >
                {accounts.map((account) => (
                  <MenuItem key={account.id} value={account.id}>
                    {account.type} - ${account.balance.toFixed(2)}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                select
                fullWidth
                label="Cuenta Destino"
                name="destinationAccountId"
                value={transferData.destinationAccountId}
                onChange={handleChange}
                required
              >
                {accounts.map((account) => (
                  <MenuItem key={account.id} value={account.id}>
                    {account.type} - {account.accountNumber}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
        );
      case 1:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Monto"
                name="amount"
                type="number"
                value={transferData.amount}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Descripción"
                name="description"
                multiline
                rows={4}
                value={transferData.description}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        );
      case 2:
        return (
          <Box>
            <Typography variant="h6" gutterBottom>
              Resumen de la Transferencia
            </Typography>
            <Typography>
              Cuenta Origen: {accounts.find(a => a.id === transferData.sourceAccountId)?.type}
            </Typography>
            <Typography>
              Cuenta Destino: {accounts.find(a => a.id === transferData.destinationAccountId)?.type}
            </Typography>
            <Typography>
              Monto: ${transferData.amount}
            </Typography>
            <Typography>
              Descripción: {transferData.description}
            </Typography>
          </Box>
        );
      default:
        return 'Unknown step';
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
      <Typography variant="h4" gutterBottom>
        Nueva Transferencia
      </Typography>

      <Paper sx={{ p: 3, mt: 3 }}>
        <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <form onSubmit={handleSubmit}>
          {getStepContent(activeStep)}

          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
            {activeStep !== 0 && (
              <Button onClick={handleBack} sx={{ mr: 1 }}>
                Atrás
              </Button>
            )}
            {activeStep === steps.length - 1 ? (
              <Button
                variant="contained"
                color="primary"
                type="submit"
              >
                Confirmar Transferencia
              </Button>
            ) : (
              <Button
                variant="contained"
                onClick={handleNext}
                disabled={
                  (activeStep === 0 && (!transferData.sourceAccountId || !transferData.destinationAccountId)) ||
                  (activeStep === 1 && !transferData.amount)
                }
              >
                Siguiente
              </Button>
            )}
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default Transfers; 