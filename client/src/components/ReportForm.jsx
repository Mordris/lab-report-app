import React, { useState } from 'react';
import { useCreateReportMutation, useUpdateReportMutation } from '../features/reports/reportsApi';
import { TextInput, Textarea, Button, Box, FileInput } from '@mantine/core';
import { DatePicker } from '@mantine/dates';

const ReportForm = ({ report = {}, onClose }) => {
  const [fileNumber, setFileNumber] = useState(report.fileNumber || '');
  const [patientName, setPatientName] = useState(report.patientName || '');
  const [patientSurname, setPatientSurname] = useState(report.patientSurname || '');
  const [patientId, setPatientId] = useState(report.patientId || '');
  const [diagnosisTitle, setDiagnosisTitle] = useState(report.diagnosisTitle || '');
  const [diagnosisDetails, setDiagnosisDetails] = useState(report.diagnosisDetails || '');
  const [issueDate, setIssueDate] = useState(report.issueDate ? new Date(report.issueDate) : new Date());
  const [photo, setPhoto] = useState(null);

  const [createReport] = useCreateReportMutation();
  const [updateReport] = useUpdateReportMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('fileNumber', fileNumber);
    formData.append('patientName', patientName);
    formData.append('patientSurname', patientSurname);
    formData.append('patientId', patientId);
    formData.append('diagnosisTitle', diagnosisTitle);
    formData.append('diagnosisDetails', diagnosisDetails);
    formData.append('issueDate', issueDate.toISOString());
    if (photo) {
      formData.append('photo', photo);
    }

    if (report._id) {
      await updateReport({ id: report._id, formData });
    } else {
      await createReport(formData);
    }
    onClose();
  };

  return (
    <Box sx={{ maxWidth: 500 }} mx="auto">
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <TextInput
          label="File Number"
          placeholder="File Number"
          value={fileNumber}
          onChange={(e) => setFileNumber(e.target.value)}
          required
        />
        <TextInput
          label="Patient Name"
          placeholder="Patient Name"
          value={patientName}
          onChange={(e) => setPatientName(e.target.value)}
          required
        />
        <TextInput
          label="Patient Surname"
          placeholder="Patient Surname"
          value={patientSurname}
          onChange={(e) => setPatientSurname(e.target.value)}
          required
        />
        <TextInput
          label="Patient ID"
          placeholder="Patient ID"
          value={patientId}
          onChange={(e) => setPatientId(e.target.value)}
          required
        />
        <TextInput
          label="Diagnosis Title"
          placeholder="Diagnosis Title"
          value={diagnosisTitle}
          onChange={(e) => setDiagnosisTitle(e.target.value)}
          required
        />
        <Textarea
          label="Diagnosis Details"
          placeholder="Diagnosis Details"
          value={diagnosisDetails}
          onChange={(e) => setDiagnosisDetails(e.target.value)}
          required
        />
        <DatePicker
          label="Issue Date"
          placeholder="Pick date"
          value={issueDate}
          onChange={(date) => setIssueDate(date || new Date())}
          required
        />
        <FileInput
          label="Physical Report Photo"
          placeholder="Upload a photo"
          onChange={(file) => setPhoto(file)}
        />
        <Button type="submit" mt="md">
          {report._id ? 'Update Report' : 'Create Report'}
        </Button>
      </form>
    </Box>
  );
};

export default ReportForm;
