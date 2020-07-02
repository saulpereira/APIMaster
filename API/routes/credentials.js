const express = require('express');
const router = express.Router();
const credentialsController = require('../controllers/credential');

router.get('/', credentialsController.get_credentials);

router.put('/', credentialsController.add_credentials);

module.exports = router;