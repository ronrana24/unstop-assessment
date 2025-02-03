const express = require('express');
const router = express.Router();
const roomController = require('../controllers/roomController');

router.get('/', roomController.getRooms);
router.post('/book', roomController.bookRooms);
router.post('/reset', roomController.resetRooms);
router.post('/randomize', roomController.randomizeRooms);

module.exports = router;
