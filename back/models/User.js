const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types

const User = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  name: {
    type: String,
    required: false,
  },
  profile: {
    type: String,
    required: false,
  },
  nickname: {
    type: String,
    required: false,
    default: Date.now() + '상점'
  },
  ask: {
    type: String,
    required: false
  },
  phone: {
    type: Number,
    required: false,
  },
  address: {
    type: String,
    required: false,
  },
}, { timestamps: true })

module.exports = mongoose.model('User', User)