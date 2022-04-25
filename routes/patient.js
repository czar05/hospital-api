const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientController');
const { requireAuth } = require('../middleware/authMiddleware');

router.post('/register',requireAuth, patientController.register);
router.post('/:id/create_report',requireAuth, patientController.create_report);
router.get('/:id/all_reports',requireAuth, patientController.all_reports);

module.exports = router;