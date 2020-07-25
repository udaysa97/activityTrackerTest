const express = require('express');
const router = express.Router();
router.use(express.urlencoded());
const hobbieCreator = require('../controller/hobbie_controller');
router.post('/',hobbieCreator.storeHobbie);

module.exports= router;