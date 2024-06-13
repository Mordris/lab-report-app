import React, { useState } from 'react';
import { useDeleteReportMutation } from '../features/reports/reportsApi';
import ReportForm from './ReportForm';
import { Box, Button, Text } from '@mantine/core';

const ReportItem = ({ report }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [deleteReport] = useDeleteReportMutation();

  const handleDelete = async () => {
    await deleteReport(report._id);
  };

  return (
    <Box>
      {isEditing ? (
        <ReportForm report={report} onClose={() => setIsEditing(false)} />
      ) : (
        <Box>
          <Text>{`${report.patientName} ${report.patientSurname} (File: ${report.fileNumber})`}</Text>
          <Button onClick={() => setIsEditing(true)}>Edit</Button>
          <Button color="red" onClick={handleDelete}>Delete</Button>
        </Box>
      )}
    </Box>
  );
};

export default ReportItem;
