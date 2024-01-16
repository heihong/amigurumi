
const express = require('express');
const router = express.Router();

const patternCtrl = require('./../controllers/pattern');

router.get('/', patternCtrl.getAllPattern);
router.post('/', patternCtrl.createPattern);
router.get('/:id', patternCtrl.getOnePattern);
router.put('/:id', patternCtrl.editPattern);
router.delete('/:id', patternCtrl.deletePattern);


module.exports = router;