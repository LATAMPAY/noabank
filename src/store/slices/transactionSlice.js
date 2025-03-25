import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTransactions = createAsyncThunk(
  'transactions/fetchAll',
  async ({ accountId, startDate, endDate }, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/api/transactions/${accountId}`, {
        params: { startDate, endDate }
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const createTransfer = createAsyncThunk(
  'transactions/transfer',
  async (transferData, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/transactions/transfer', transferData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const payBill = createAsyncThunk(
  'transactions/payBill',
  async (billData, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/transactions/bill-payment', billData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const schedulePayment = createAsyncThunk(
  'transactions/schedulePayment',
  async (paymentData, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/transactions/schedule', paymentData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  transactions: [],
  pendingTransactions: [],
  scheduledPayments: [],
  recentTransfers: [],
  loading: false,
  error: null,
  pagination: {
    currentPage: 1,
    totalPages: 1,
    totalItems: 0,
    itemsPerPage: 20
  },
  filters: {
    startDate: null,
    endDate: null,
    type: 'all',
    status: 'all'
  }
};

const transactionSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    setTransactionFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    setPagination: (state, action) => {
      state.pagination = { ...state.pagination, ...action.payload };
    },
    clearTransactionError: (state) => {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTransactions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.loading = false;
        state.transactions = action.payload.transactions;
        state.pagination = action.payload.pagination;
      })
      .addCase(fetchTransactions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createTransfer.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createTransfer.fulfilled, (state, action) => {
        state.loading = false;
        state.recentTransfers = [action.payload, ...state.recentTransfers].slice(0, 5);
        state.transactions = [action.payload, ...state.transactions];
      })
      .addCase(createTransfer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(payBill.fulfilled, (state, action) => {
        state.transactions = [action.payload, ...state.transactions];
      })
      .addCase(schedulePayment.fulfilled, (state, action) => {
        state.scheduledPayments = [action.payload, ...state.scheduledPayments];
      });
  },
});

export const {
  setTransactionFilters,
  setPagination,
  clearTransactionError
} = transactionSlice.actions;

export default transactionSlice.reducer;