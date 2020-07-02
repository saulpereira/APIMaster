const express = require('express');
const router = express.Router();
const messagesController = require('../controllers/messages');

router.get('/', messagesController.get_all_messages);

router.post('/', messagesController.add_messages);

router.get('/:messageid', messagesController.get_one_message);

router.get('/:tags', messagesController.get_tags);

module.exports = router;