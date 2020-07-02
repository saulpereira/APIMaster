const express = require('express');
const router = express.Router();
const messagesController = require('../controllers/messages');

router.get('/', messagesController.get_all_messages);

router.post('/', messagesController.add_messages);

router.get('/:messageId', messagesController.get_one_message);

module.exports = router;