const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const { getAllUsers, getAllMatches, getAllMessages } = require('../controllers/admin.controller');

router.get('/users', auth, admin, getAllUsers);
router.get('/matches', auth, admin, getAllMatches);
router.get('/messages', auth, admin, getAllMessages);

module.exports = router;