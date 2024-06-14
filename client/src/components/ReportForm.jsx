import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { TextInput, Textarea, Button, Box, FileInput } from "@mantine/core";
import {
  useCreateReportMutation,
  useUpdateReportMutation,
} from "../features/reports/reportsApi";

const ReportForm = ({ report = {}, onClose }) => {
  const [fileNumber, setFileNumber] = useState(report.fileNumber || "");
  const [patientName, setPatientName] = useState(report.patientName || "");
  const [patientSurname, setPatientSurname] = useState(
    report.patientSurname || ""
  );
  const [patientID, setPatientID] = useState(report.patientID || "");
  const [diagnosisTitle, setDiagnosisTitle] = useState(
    report.diagnosisTitle || ""
  );
  const [diagnosisDetails, setDiagnosisDetails] = useState(
    report.diagnosisDetails || ""
  );
  const [reportDate, setReportDate] = useState(
    report.reportDate ? new Date(report.reportDate) : new Date()
  );
  const [photo, setPhoto] = useState(null);

  const [createReport] = useCreateReportMutation();
  const [updateReport] = useUpdateReportMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('fileNumber', fileNumber);
    formData.append('patientName', patientName);
    formData.append('patientSurname', patientSurname);
    formData.append('patientID', patientID);
    formData.append('diagnosisTitle', diagnosisTitle);
    formData.append('diagnosisDetails', diagnosisDetails);
    formData.append('reportDate', reportDate.toISOString());
  
    // Append photo if it exists
    if (photo) {
      formData.append('photo', photo);
    }
  
    try {
      if (report._id) {
        await updateReport({ id: report._id, formData });
      } else {
        await createReport(formData);
      }
      onClose();
    } catch (error) {
      console.error('Error creating/updating report:', error);
      // Handle error, e.g., display error message to user
    }
  };
  
  return (
    <Box sx={{ maxWidth: 500 }} mx="auto">
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        {/* File Number Input */}
        <TextInput
          label="File Number"
          placeholder="File Number"
          value={fileNumber}
          onChange={(e) => setFileNumber(e.target.value)}
          required
        />
        {/* Patient Name Input */}
        <TextInput
          label="Patient Name"
          placeholder="Patient Name"
          value={patientName}
          onChange={(e) => setPatientName(e.target.value)}
          required
        />
        {/* Patient Surname Input */}
        <TextInput
          label="Patient Surname"
          placeholder="Patient Surname"
          value={patientSurname}
          onChange={(e) => setPatientSurname(e.target.value)}
          required
        />
        {/* Patient ID Input */}
        <TextInput
          label="Patient ID"
          placeholder="Patient ID"
          value={patientID}
          onChange={(e) => setPatientID(e.target.value)}
          required
        />
        {/* Diagnosis Title Input */}
        <TextInput
          label="Diagnosis Title"
          placeholder="Diagnosis Title"
          value={diagnosisTitle}
          onChange={(e) => setDiagnosisTitle(e.target.value)}
          required
        />
        {/* Diagnosis Details Textarea */}
        <Textarea
          label="Diagnosis Details"
          placeholder="Diagnosis Details"
          value={diagnosisDetails}
          onChange={(e) => setDiagnosisDetails(e.target.value)}
          required
        />
        {/* Report Date DatePicker */}
        <DatePicker
          selected={reportDate}
          onChange={(date) => setReportDate(date)}
          dateFormat="yyyy-MM-dd"
          placeholderText="Select report date"
          required
        />
        {/* Photo FileInput */}
        <FileInput
          label="Physical Report Photo"
          placeholder="Upload a photo"
          onChange={(file) => setPhoto(file)}
        />
        {/* Submit Button */}
        <Button type="submit" mt="md">
          {report._id ? 'Update Report' : 'Create Report'}
        </Button>
      </form>
    </Box>
  );
};

export default ReportForm;
