const express = require('express');
const router = express.Router();
const visitorController = require("../controllers/visitorController")

router.get("/", visitorController.getVisitor);
router.put("/", visitorController.addVisitor);

module.exports = router;