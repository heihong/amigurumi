
const express = require('express');
const router = express.Router();

const patternCtrl = require('./../controllers/pattern');

router.get('/', patternCtrl.getAllPattern);
router.post('/', patternCtrl.createPattern);

module.exports = router;