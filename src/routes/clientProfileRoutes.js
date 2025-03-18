const express = require('express');
const protectRoutes = require('../middleware/protectRoutes');
const uploadMiddleware = require('../middleware/uploadMiddleware');
const { getClientProfile, updateClientProfile, deleteClient } = require('../controllers/clientProfileController');

const router = express.Router();

router.get('/profile', protectRoutes, getClientProfile);
router.put('/profile', protectRoutes, uploadMiddleware.single('photo'), updateClientProfile);
router.delete('/profile', protectRoutes, deleteClient);

module.exports = router;