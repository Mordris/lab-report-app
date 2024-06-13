const mongoose = require('mongoose');

const technicianSchema = new mongoose.Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  hospitalID: { type: String, required: true, unique: true },
});

const Technician = mongoose.model('Technician', technicianSchema);

module.exports = Technician;
