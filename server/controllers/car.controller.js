let Car = require('../models/cars.model')


module.exports = {

  addCar: function(req, res){
    let { brand, model, year, color, mileage, engine, power, registration, price} = req.body
    Car.create({
      brand:brand,
      model:model,
      year:year,
      color:color,
      mileage:mileage,
      engine:engine,
      power:power,
      registration:registration,
      price:price
    })
    .then(function(datereg){
      res.json(datareg)
    })
    .catch(function(err){
      res.json(err)
    })
  },
  //get all  cars
  getCars:function(req, res){
    Car.find({})
    .then(function(allcars){
      res.json(allcars)
    })
    .catch(function(err){
      res.json(err)
    })
  },

  deleteCar: function (req, res) {
      Car.findByIdAndRemove({
          _id: req.params.id
        })
        .then(function (result) {
          res.json({
            message: "car telah dihapus",
            result
          })
        })
        .catch(function (err) {
          console.log(err)
          res.json(err)
        })
    },


  // get cars by ID
  getCarbyId: function(req, res){
    Car.findById({
      _id:req.params.id
    })
    .then(function(dataSingle){
      res.json(dataSingle)
    })
    .catch(function(err){
      res.json(err)
    })
  },
  updatesingleCar: function(req, res){
    let {brand, model, year, color, mileage, engine, power, registration, price} = req.body
    Car.where({
      _id:req.params.id
    })
    .update({
      $set: req.body
    })
    .then(function(response){
      res.json(response)
    })
    .catch(function(err){
      res.json(err)
    })
  }



}
