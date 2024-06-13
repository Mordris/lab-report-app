const express = require('express');
const {
  createTechnician,
  getTechnicians,
  getTechnicianById,
  updateTechnician,
  deleteTechnician,
} = require('../controllers/technicianController');

const router = express.Router();

router.route('/').post(createTechnician).get(getTechnicians);
router.route('/:id').get(getTechnicianById).put(updateTechnician).delete(deleteTechnician);

module.exports = router;
