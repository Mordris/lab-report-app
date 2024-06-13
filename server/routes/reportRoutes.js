const express = require('express');
const {
  createReport,
  getReports,
  getReportById,
  updateReport,
  deleteReport,
} = require('../controllers/reportController');

const router = express.Router();

router.route('/').post(createReport).get(getReports);
router.route('/:id').get(getReportById).put(updateReport).delete(deleteReport);

module.exports = router;
