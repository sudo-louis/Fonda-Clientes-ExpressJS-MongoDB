const express = require('express');
const router = express.Router();
const upload = require('../middleware/uploadMiddleware');
const { registerClient, loginClient, logoutClient } = require('../controllers/clientAuthController');

router.post('/register', upload.single('photo'), registerClient);
router.post('/login', loginClient);
router.post('/logout', logoutClient);

module.exports = router;