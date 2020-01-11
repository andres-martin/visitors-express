const express = require('express');
const { createVisitor } = require('../controllers/visitors');

const router = express.Router();

router.route('/').get(createVisitor);

module.exports = router;
