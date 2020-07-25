const express = require('express');
const router = express.Router();
const tracker = require('../models/tracker');

const homeController = require('../controller/home_controller');

router.get('/',homeController.home);

router.use('/addHobbie',require('./addHobbie'));

router.use('/remove-hobby',require('./removeHobby'))



module.exports = router;