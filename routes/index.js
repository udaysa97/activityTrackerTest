const express = require('express');
const router = express.Router();
const tracker = require('../models/tracker');

const homeController = require('../controller/home_controller');
// Main route. All other routes will be called from here
router.get('/',homeController.home);

router.use('/addHobbie',require('./addHobbie'));

router.use('/remove-hobby',require('./removeHobby'));

router.use('/update-hobby',require('./updateHobby'));



module.exports = router;