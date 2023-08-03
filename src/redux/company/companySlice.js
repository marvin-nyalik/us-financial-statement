import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  report: [],
  error: null,
};

export const fetchReport = createAsyncThunk('report/fetch',
  async (symbol) => {
    const baseURL = 'https://financialmodelingprep.com/api/v3/income-statement/';
    const symbolID = symbol;
    const endURL = '?limit=120&apikey=1b41a7ddd511d92ce0de893c4f689169';
    const fetchURL = `${baseURL}${symbolID}${endURL}`;
    const report = await axios.get(fetchURL);
    const selectedReport = report.data.map((report) => ({
      date: report.date,
      currency: report.reportedCurrency,
      year: report.calendarYear,
      researchExpenses: report.researchAndDevelopmentExpenses,
      income: report.operatingIncome,
    }));

    return selectedReport;
  });

const companySlice = createSlice({
  name: 'company',
  initialState,
  reducers: {
    clearReports: (state) => {
      state.report = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchReport.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchReport.fulfilled, (state, action) => {
        state.loading = false;
        state.report = action.payload;
      })

      .addCase(fetchReport.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { clearReports } = companySlice.actions;
export default companySlice.reducer;
