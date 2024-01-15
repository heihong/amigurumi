
const express = require('express');
const router = express.Router();

const patternCtrl = require('./../controllers/pattern');

router.get('/', patternCtrl.getAllPattern);
router.post('/', patternCtrl.createPattern);
router.get('/:id', patternCtrl.getOnePattern);

module.exports = router;