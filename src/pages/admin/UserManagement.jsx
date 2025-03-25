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
  Button,
  IconButton,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Chip,
  MenuItem,
} from '@mui/material';
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  Block as BlockIcon,
} from '@mui/icons-material';

// Datos de ejemplo
const mockUsers = [
  {
    id: 1,
    name: 'Juan Pérez',
    email: 'juan@example.com',
    role: 'client',
    status: 'active',
    lastLogin: '2024-03-24 10:30',
  },
  {
    id: 2,
    name: 'María García',
    email: 'maria@example.com',
    role: 'admin',
    status: 'active',
    lastLogin: '2024-03-24 09:15',
  },
  {
    id: 3,
    name: 'Carlos López',
    email: 'carlos@example.com',
    role: 'client',
    status: 'inactive',
    lastLogin: '2024-03-23 15:45',
  },
];

const UserManagement = () => {
  const [users] = useState(mockUsers);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleEditClick = (user) => {
    setSelectedUser(user);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedUser(null);
  };

  const handleSaveUser = () => {
    // Aquí iría la lógica para guardar los cambios del usuario
    handleCloseDialog();
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return 'success';
      case 'inactive':
        return 'error';
      default:
        return 'default';
    }
  };

  const getRoleLabel = (role) => {
    switch (role) {
      case 'admin':
        return 'Administrador';
      case 'client':
        return 'Cliente';
      default:
        return role;
    }
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box sx={{ mt: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Typography variant="h4" gutterBottom>
          Gestión de Usuarios
        </Typography>
        <Button variant="contained" color="primary">
          Nuevo Usuario
        </Button>
      </Box>

      <TextField
        fullWidth
        label="Buscar usuarios"
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{ mb: 3 }}
      />

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Rol</TableCell>
              <TableCell>Estado</TableCell>
              <TableCell>Último Acceso</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <Chip
                    label={getRoleLabel(user.role)}
                    color={user.role === 'admin' ? 'primary' : 'default'}
                    size="small"
                  />
                </TableCell>
                <TableCell>
                  <Chip
                    label={user.status}
                    color={getStatusColor(user.status)}
                    size="small"
                  />
                </TableCell>
                <TableCell>{user.lastLogin}</TableCell>
                <TableCell>
                  <IconButton
                    size="small"
                    onClick={() => handleEditClick(user)}
                    sx={{ mr: 1 }}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    size="small"
                    color="error"
                    sx={{ mr: 1 }}
                  >
                    <DeleteIcon />
                  </IconButton>
                  <IconButton
                    size="small"
                    color={user.status === 'active' ? 'error' : 'success'}
                  >
                    <BlockIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Diálogo de edición */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Editar Usuario</DialogTitle>
        <DialogContent>
          <Box sx={{ pt: 2 }}>
            <TextField
              fullWidth
              label="Nombre"
              defaultValue={selectedUser?.name}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Email"
              defaultValue={selectedUser?.email}
              sx={{ mb: 2 }}
            />
            <TextField
              select
              fullWidth
              label="Rol"
              defaultValue={selectedUser?.role}
              sx={{ mb: 2 }}
            >
              <MenuItem value="client">Cliente</MenuItem>
              <MenuItem value="admin">Administrador</MenuItem>
            </TextField>
            <TextField
              select
              fullWidth
              label="Estado"
              defaultValue={selectedUser?.status}
            >
              <MenuItem value="active">Activo</MenuItem>
              <MenuItem value="inactive">Inactivo</MenuItem>
            </TextField>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancelar</Button>
          <Button onClick={handleSaveUser} variant="contained">
            Guardar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default UserManagement; 