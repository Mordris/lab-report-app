import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { MantineProvider } from '@mantine/core';
import App from './App';
import reportsReducer from './features/reports/reportsSlice';
import techniciansReducer from './features/technicians/techniciansSlice';
import { techniciansApi } from './features/technicians/techniciansApi';
import { reportsApi } from './features/reports/reportsApi';

const store = configureStore({
  reducer: {
    technicians: techniciansReducer,
    reports: reportsReducer,
    [techniciansApi.reducerPath]: techniciansApi.reducer,
    [reportsApi.reducerPath]: reportsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(techniciansApi.middleware, reportsApi.middleware),
});

ReactDOM.render(
  <Provider store={store}>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <App />
    </MantineProvider>
  </Provider>,
  document.getElementById('root')
);
