import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUserProfile = createAsyncThunk(
  'user/fetchProfile',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/api/users/profile');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateUserProfile = createAsyncThunk(
  'user/updateProfile',
  async (profileData, { rejectWithValue }) => {
    try {
      const response = await axios.put('/api/users/profile', profileData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateUserPreferences = createAsyncThunk(
  'user/updatePreferences',
  async (preferences, { rejectWithValue }) => {
    try {
      const response = await axios.put('/api/users/preferences', preferences);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  profile: null,
  preferences: {
    language: 'es',
    notifications: {
      email: true,
      sms: true,
      push: true
    },
    theme: 'light'
  },
  loading: false,
  error: null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.preferences.language = action.payload;
    },
    setNotificationPreferences: (state, action) => {
      state.preferences.notifications = {
        ...state.preferences.notifications,
        ...action.payload
      };
    },
    setTheme: (state, action) => {
      state.preferences.theme = action.payload;
    },
    clearUserError: (state) => {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.profile = action.payload;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.profile = action.payload;
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateUserPreferences.fulfilled, (state, action) => {
        state.preferences = action.payload;
      });
  },
});

export const {
  setLanguage,
  setNotificationPreferences,
  setTheme,
  clearUserError
} = userSlice.actions;

export default userSlice.reducer;