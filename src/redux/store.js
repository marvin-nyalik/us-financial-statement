import { configureStore, combineReducers } from '@reduxjs/toolkit';
import companiesSlice from './companies/companiesSlice';
import companySlice from './company/companySlice';

const rootReducer = combineReducers({
  companies: companiesSlice,
  company: companySlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
