// reportModel.js (or wherever you define your Mongoose schema)

const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  fileNumber: { type: String, required: true },
  patientName: { type: String, required: true },
  patientSurname: { type: String, required: true },
  patientID: { type: String, required: true },
  diagnosisTitle: { type: String, required: true },
  diagnosisDetails: { type: String, required: true },
  reportDate: { type: Date, default: Date.now },
  photo: { type: String }, // Assuming 'photo' is a String field to store filename
  technician: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Technician',
  },
});

const Report = mongoose.model('Report', reportSchema);

module.exports = Report;
