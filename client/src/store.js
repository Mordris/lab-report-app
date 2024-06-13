import { configureStore } from '@reduxjs/toolkit';
import reportsReducer from './features/reports/reportsSlice';
import techniciansReducer from './features/technicians/techniciansSlice';
import { setupListeners } from '@reduxjs/toolkit/query';

const store = configureStore({
  reducer: {
    reports: reportsReducer,
    technicians: techniciansReducer,
  },
});

setupListeners(store.dispatch);

export default store;
