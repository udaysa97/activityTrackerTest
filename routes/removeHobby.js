const express = require('express');
const router = express.Router();
const hobbyRemover = require('../controller/hobbie_remover');

router.get('/',hobbyRemover.removeHobbie);

module.exports = router;