const express = require('express');
const router = express.Router();
const {
  getAnalyticsSummary,
  getAllUsers,
  createDoctor,
  updateDoctor,
  deleteDoctor,
  getAssistanceRequests,
  updateAssistanceStatus
} = require('../controllers/adminController');
const { protect, authorize } = require('../middleware/auth');

router.get('/analytics', protect, authorize('admin'), getAnalyticsSummary);
router.get('/users', protect, authorize('admin'), getAllUsers);
router.post('/doctors', protect, authorize('admin'), createDoctor);
router.put('/doctors/:id', protect, authorize('admin'), updateDoctor);
router.delete('/doctors/:id', protect, authorize('admin'), deleteDoctor);
router.get('/assistance', protect, authorize('admin'), getAssistanceRequests);
router.put('/assistance/:id', protect, authorize('admin'), updateAssistanceStatus);

module.exports = router;
