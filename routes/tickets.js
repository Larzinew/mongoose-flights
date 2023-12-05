var express = require('express');
var router = express.Router();

// You'll be creating this controller module next
const ticketsCtrl = require('../controllers/flights');
  
// GET /flights/:id/tickets/new
router.get('/flights/:id/tickets/new', ticketsCtrl.new);

// POST /flights/:id/tickets
router.post('/flights/:id/ticket', ticketsCtrl.create);
  
module.exports = router;