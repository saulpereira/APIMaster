const express = require('express');
const router = express.Router();
const credentialsController = require('../controllers/credentials');

router.get('/', credentialsController.get_credentials);

router.put('/', credentialsController.add_credentials);

module.exports = router;