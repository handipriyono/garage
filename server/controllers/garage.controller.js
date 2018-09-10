let Garages = require('../models/garage.model')

module.exports = {
  creates: function(req, res) {
    let {
      carlist,
      name,
      address,
      phone,
      email,
      stocks
    } = req.body
    Garages.create({
      name: name,
      address: address,
      phone: phone,
      email: email,
      stocks: stocks,
      carlist: carlist
    }).then(function(dataGarage) {
      console.log('dataGarage')
      res.json({msg: 'create data garage successs', result: dataGarage})
    }).catch(function(err) {
      console.log(err, 'sss')
      res.json(err)
    })

  },
  getGarages: function(req, res) {
    Garages.find({_id: req.params.id}).populate('carlist').then(function(dataGarage) {
      res.json({data: dataGarage})
    }).catch(function(err) {
      console.log(err)
      res.json(err)
    })
  },
  getAllGarages: function(req, res) {
    Garages.find({}).then(function(dataGarage) {
      res.json({data: dataGarage})
    }).catch(function(err) {
      console.log(err)
      res.json(err)
    })
  },

  getGaragebyId: function(req, res) {
    Garages.findById({_id: req.params.id}).then(function(dataSingle) {
      res.json(dataSingle)
    }).catch(function(err) {
      res.json(err)
    })
  },

  deleteGarage: function (req, res) {
      Garages.findByIdAndRemove({
          _id: req.params.id
        })
        .then(function (result) {
          res.json({
            message: "garage telah dihapus",
            result
          })
        })
        .catch(function (err) {
          console.log(err)
          res.json(err)
        })
    },

//assign car to garage
  updatesingleGarage: function(req, res) {
    let {carid, name, address, phone, email, stocks} = req.body
    Garages.update({
      _id: req.params.id
    }, {
      $push: {
        carlist:carid
      }
    }).then(function(response) {
      res.json(response)
    }).catch(function(err) {
      res.json(err)
    })
  }

}
