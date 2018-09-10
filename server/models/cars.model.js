const mongoose = require('mongoose');
const Schema = mongoose.Schema

const carSchema = new Schema({

  brand: {
    type: String
  },
  model: {
    type: String,
  },
  year: {
    type: Number,
  },
  color: {
    type: String,
  },
  mileage: {
    type: Number,
  },
  engine: {
    type: String,
  },
  power: {
    type: Number,
  },
  registration: {
    type: String,
  },
  price: {
    type: Number,
  }
}, {
  timestamps: true
});


const Car = mongoose.model('Car', carSchema);

module.exports = Car
