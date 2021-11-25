const express = require('express');
const router = express.Router();

const controllers_tickets = require('../controllers/tickets')

router.get('/ticket/read/:_id', controllers_tickets.read);
router.get('/ticket/analytics', controllers_tickets.analytics);
router.get('/ticket', controllers_tickets.findAll);
router.post('/ticket', controllers_tickets.create);
router.delete('/ticket', controllers_tickets.delete);

module.exports = router;
