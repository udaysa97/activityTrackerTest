const express = require('express');
const router = express.Router();
const homeController = require('../controller/home_controller');

router.use('/',homeController.home);

module.exports = router;