import React from 'react';
import { useGetReportsQuery } from '../features/reports/reportsApi';
import ReportItem from './ReportItem';
import { Box, Loader, Alert } from '@mantine/core';

const ReportList = () => {
  const { data: reports, error, isLoading } = useGetReportsQuery();

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Alert color="red">Error loading reports</Alert>;
  }

  return (
    <Box>
      {reports.map((report) => (
        <ReportItem key={report._id} report={report} />
      ))}
    </Box>
  );
};

export default ReportList;
