const Technician = require('../models/Technician');

// Create a new technician
const createTechnician = async (req, res) => {
  const { name, surname, hospitalID } = req.body;
  
  try {
    const technician = new Technician({
      name,
      surname,
      hospitalID,
    });

    await technician.save();
    res.status(201).json(technician);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all technicians
const getTechnicians = async (req, res) => {
  try {
    const technicians = await Technician.find();
    res.status(200).json(technicians);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single technician
const getTechnicianById = async (req, res) => {
  try {
    const technician = await Technician.findById(req.params.id);
    if (!technician) {
      return res.status(404).json({ message: 'Technician not found' });
    }
    res.status(200).json(technician);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a technician
const updateTechnician = async (req, res) => {
  try {
    const technician = await Technician.findById(req.params.id);
    if (!technician) {
      return res.status(404).json({ message: 'Technician not found' });
    }

    const updatedTechnician = await Technician.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedTechnician);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a technician
const deleteTechnician = async (req, res) => {
  try {
    const technician = await Technician.findById(req.params.id);
    if (!technician) {
      return res.status(404).json({ message: 'Technician not found' });
    }

    await technician.remove();
    res.status(200).json({ message: 'Technician removed' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createTechnician,
  getTechnicians,
  getTechnicianById,
  updateTechnician,
  deleteTechnician,
};
