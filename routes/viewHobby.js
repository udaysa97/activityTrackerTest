const express = require('express');
const router = express.Router();
const hobbyViewer = require('../controller/allHobby_controller');

router.get('/',hobbyViewer.viewHobbies);

module.exports = router;