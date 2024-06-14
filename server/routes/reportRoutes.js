const express = require('express');
const {
  createReport,
  getReports,
  getReportById,
  updateReport,
  deleteReport,
} = require('../controllers/reportController');
const upload = require('../middleware/upload');

const router = express.Router();

router.route('/')
  .post(upload.single('photo'), createReport) // Use multer to handle the file upload
  .get(getReports);

router.route('/:id')
  .get(getReportById)
  .put(upload.single('photo'), updateReport) // Use multer for update as well
  .delete(deleteReport);

module.exports = router;
