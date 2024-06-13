import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const reportsApi = createApi({
  reducerPath: 'reportsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api' }),
  endpoints: (builder) => ({
    getReports: builder.query({
      query: () => '/reports',
    }),
    getReportById: builder.query({
      query: (id) => `/reports/${id}`,
    }),
    createReport: builder.mutation({
      query: (report) => ({
        url: '/reports',
        method: 'POST',
        body: report,
      }),
    }),
    updateReport: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `/reports/${id}`,
        method: 'PUT',
        body: rest,
      }),
    }),
    deleteReport: builder.mutation({
      query: (id) => ({
        url: `/reports/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetReportsQuery,
  useGetReportByIdQuery,
  useCreateReportMutation,
  useUpdateReportMutation,
  useDeleteReportMutation,
} = reportsApi;
