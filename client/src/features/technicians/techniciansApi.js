import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const techniciansApi = createApi({
  reducerPath: 'techniciansApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api' }),
  endpoints: (builder) => ({
    getTechnicians: builder.query({
      query: () => '/technicians',
    }),
    getTechnicianById: builder.query({
      query: (id) => `/technicians/${id}`,
    }),
    createTechnician: builder.mutation({
      query: (technician) => ({
        url: '/technicians',
        method: 'POST',
        body: technician,
      }),
    }),
    updateTechnician: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `/technicians/${id}`,
        method: 'PUT',
        body: rest,
      }),
    }),
    deleteTechnician: builder.mutation({
      query: (id) => ({
        url: `/technicians/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetTechniciansQuery,
  useGetTechnicianByIdQuery,
  useCreateTechnicianMutation,
  useUpdateTechnicianMutation,
  useDeleteTechnicianMutation,
} = techniciansApi;
