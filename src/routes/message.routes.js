const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { getMessages, sendMessage } = require('../controllers/message.controller');

router.get('/', auth, getMessages);
router.post('/', auth, sendMessage);

module.exports = router;