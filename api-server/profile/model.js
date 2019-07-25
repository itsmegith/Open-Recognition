const mongoose = require('mongoose');
const validator = require('validator');

const profile_schema = mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
      trim: true
    },
    last_name: {
      type: String,
      required: true,
      trim: true
      
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      validate:{
        validator: validator.isEmail,
        message: '{VALUE} is not a valid email',
        isAsync: false
      }
    },
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    password: {
      type: String,
      required: true,
      trim: true
    },
    active:{
      type: Boolean
    },
    photo:{
      type:String,
      required: false
    },
    join_date: {
      type: Date,
      default: Date.now
    }
  }
);


module.exports = mongoose.model('profile', profile_schema);
