const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reportsController');
const {requireAuth} = require('../middleware/authMiddleware');

router.get('/:status',requireAuth, reportController.reports);

module.exports = router;