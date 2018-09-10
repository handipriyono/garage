var express = require('express');
var router = express.Router();
let {addCar , getCars,deleteCar,  getCarbyId, updatesingleCar} = require('../controllers/car.controller')

router.get('/',getCars)
router.get('/:id', getCarbyId)
router.put('/edit/:id', updatesingleCar)
router.post('/add',addCar)
router.delete('/delete/:id', deleteCar)

module.exports = router
