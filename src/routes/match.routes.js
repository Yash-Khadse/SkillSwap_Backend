const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { getMatches } = require('../controllers/match.controller');

router.get('/', auth, getMatches);

module.exports = router;