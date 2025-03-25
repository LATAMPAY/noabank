import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAccounts = createAsyncThunk(
  'accounts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/api/accounts');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchAccountDetails = createAsyncThunk(
  'accounts/fetchDetails',
  async (accountId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/api/accounts/${accountId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const createAccount = createAsyncThunk(
  'accounts/create',
  async (accountData, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/accounts', accountData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateAccountSettings = createAsyncThunk(
  'accounts/updateSettings',
  async ({ accountId, settings }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`/api/accounts/${accountId}/settings`, settings);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  accounts: [],
  selectedAccount: null,
  accountDetails: {},
  loading: false,
  error: null,
  filters: {
    type: 'all',
    status: 'active'
  },
  pagination: {
    currentPage: 1,
    totalPages: 1,
    totalItems: 0,
    itemsPerPage: 10
  }
};

const accountSlice = createSlice({
  name: 'accounts',
  initialState,
  reducers: {
    setSelectedAccount: (state, action) => {
      state.selectedAccount = action.payload;
    },
    setAccountFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    clearAccountError: (state) => {
      state.error = null;
    },
    setPagination: (state, action) => {
      state.pagination = { ...state.pagination, ...action.payload };
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAccounts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAccounts.fulfilled, (state, action) => {
        state.loading = false;
        state.accounts = action.payload.accounts;
        state.pagination = action.payload.pagination;
      })
      .addCase(fetchAccounts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchAccountDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAccountDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.accountDetails[action.payload.id] = action.payload;
      })
      .addCase(fetchAccountDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createAccount.fulfilled, (state, action) => {
        state.accounts = [action.payload, ...state.accounts];
      })
      .addCase(updateAccountSettings.fulfilled, (state, action) => {
        const index = state.accounts.findIndex(acc => acc.id === action.payload.id);
        if (index !== -1) {
          state.accounts[index] = action.payload;
        }
        if (state.selectedAccount?.id === action.payload.id) {
          state.selectedAccount = action.payload;
        }
      });
  },
});

export const {
  setSelectedAccount,
  setAccountFilters,
  clearAccountError,
  setPagination
} = accountSlice.actions;

export default accountSlice.reducer;