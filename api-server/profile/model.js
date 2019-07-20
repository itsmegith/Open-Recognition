const mongoose = require('mongoose');

const profile_schema = mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true
    },
    last_name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    active:{
      type: Boolean
    },
    photo:{
      type: __filename,
      required: false
    }
  }
);

module.exports = mongoose.model('profile', profile_schema);
