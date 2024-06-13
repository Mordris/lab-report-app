import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetReportByIdQuery } from '../features/reports/reportsApi';
import { Box, Text, Loader, Alert } from '@mantine/core';

const ReportDetails = () => {
  const { id } = useParams();
  const { data: report, error, isLoading } = useGetReportByIdQuery(id);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Alert color="red">Error loading report details</Alert>;
  }

  return (
    <Box>
      <Text>File Number: {report.fileNumber}</Text>
      <Text>Patient Name: {report.patientName} {report.patientSurname}</Text>
      <Text>Patient ID: {report.patientId}</Text>
      <Text>Diagnosis Title: {report.diagnosisTitle}</Text>
      <Text>Diagnosis Details: {report.diagnosisDetails}</Text>
      <Text>Issue Date: {new Date(report.issueDate).toLocaleDateString()}</Text>
      {report.photo && <img src={`http://localhost:5000/${report.photo}`} alt="Report" />}
    </Box>
  );
};

export default ReportDetails;
