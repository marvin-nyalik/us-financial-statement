import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  companies: [],
  error: null,
};

export const fetchCompanies = createAsyncThunk('/fetch-companies', async () => {
  const companies = await axios.get('https://financialmodelingprep.com/api/v3/financial-statement-symbol-lists?apikey=1b41a7ddd511d92ce0de893c4f689169');
  const filteredCompanies = companies.data.splice(11762, 10);
  return filteredCompanies;
});

const companiesSlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCompanies.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchCompanies.fulfilled, (state, action) => {
        state.loading = false;
        state.companies = action.payload;
      })

      .addCase(fetchCompanies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default companiesSlice.reducer;
