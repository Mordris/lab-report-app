import { createSlice } from '@reduxjs/toolkit';
import { techniciansApi } from './techniciansApi';

const techniciansSlice = createSlice({
  name: 'technicians',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(techniciansApi.endpoints.getTechnicians.matchFulfilled, (state, action) => {
        return action.payload;
      })
      .addMatcher(techniciansApi.endpoints.createTechnician.matchFulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addMatcher(techniciansApi.endpoints.updateTechnician.matchFulfilled, (state, action) => {
        const index = state.findIndex((tech) => tech._id === action.payload._id);
        if (index !== -1) {
          state[index] = action.payload;
        }
      })
      .addMatcher(techniciansApi.endpoints.deleteTechnician.matchFulfilled, (state, action) => {
        return state.filter((tech) => tech._id !== action.payload._id);
      });
  },
});

export default techniciansSlice.reducer;
