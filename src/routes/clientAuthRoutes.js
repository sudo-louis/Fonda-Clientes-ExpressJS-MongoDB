const express = require('express');
const { registerClient, loginClient, logoutClient } = require('../controllers/clientAuthController');
const uploadMiddleware = require('../middleware/uploadMiddleware');

const router = express.Router();

router.post('/register', uploadMiddleware.single('photo'), registerClient);
router.post('/login', loginClient);
router.post('/logout', logoutClient);

module.exports = router;