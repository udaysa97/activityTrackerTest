const express = require('express');
const router = express.Router();
const hobbyUpdator = require('../controller/hobby_updator');

router.get('/',hobbyUpdator.update);

module.exports = router;