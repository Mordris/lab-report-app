const Report = require('../models/Report');

const createReport = async (req, res) => {
  const { fileNumber, patientName, patientSurname, patientID, diagnosisTitle, diagnosisDetails, reportDate } = req.body;

  // Validate required fields
  if (!fileNumber || !patientName || !patientSurname || !patientID || !diagnosisTitle || !diagnosisDetails || !reportDate) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // Handle file upload if needed
  const photo = req.file; // Assuming file is uploaded via multer or similar middleware

  try {
    const report = new Report({
      fileNumber,
      patientName,
      patientSurname,
      patientID,
      diagnosisTitle,
      diagnosisDetails,
      reportDate,
      photo: photo ? photo.path : undefined, // Store photo path or URL
    });

    await report.save();
    res.status(201).json(report);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all reports
const getReports = async (req, res) => {
  try {
    const reports = await Report.find().populate('technician');
    res.status(200).json(reports);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single report
const getReportById = async (req, res) => {
  try {
    const report = await Report.findById(req.params.id).populate('technician');
    if (!report) {
      return res.status(404).json({ message: 'Report not found' });
    }
    res.status(200).json(report);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a report
const updateReport = async (req, res) => {
  try {
    const report = await Report.findById(req.params.id);
    if (!report) {
      return res.status(404).json({ message: 'Report not found' });
    }

    const updatedReport = await Report.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedReport);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a report
const deleteReport = async (req, res) => {
  try {
    const report = await Report.findById(req.params.id);
    if (!report) {
      return res.status(404).json({ message: 'Report not found' });
    }

    await report.remove();
    res.status(200).json({ message: 'Report removed' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createReport,
  getReports,
  getReportById,
  updateReport,
  deleteReport,
};
