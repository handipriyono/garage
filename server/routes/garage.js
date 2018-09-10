var express = require('express');
var router = express.Router();
let {creates,getGarages, deleteGarage, getAllGarages, getGaragebyId, updatesingleGarage} = require('../controllers/garage.controller')


router.get('/',getAllGarages)
router.post('/create', creates)
router.get('/:id', getGarages)
router.put('/edit/:id', updatesingleGarage)
router.delete('/delete/:id', deleteGarage)

module.exports = router
