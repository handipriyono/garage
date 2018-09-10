const mongoose = require('mongoose');
const Schema = mongoose.Schema

const garageSchema = new Schema({

  name: {
    type: String
  },
  address: {
    type: String,
  },
  phone: {
    type: String,
  },
  email: {
    type: String,
  },
  stocks: {
    type: Number,
  },
  carlist: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Car'
}]
}, {
  timestamps: true
});


const Garages = mongoose.model('Garage', garageSchema);

module.exports = Garages
