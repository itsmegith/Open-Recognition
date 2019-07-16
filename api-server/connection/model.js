const mongoose = require('mongoose');

const connection_schema = mongoose.Schema(
  {
    user1: {
      type: id
      
    },
    user2: {
      type: id
      
    },
    accept1: {
      type: Boolean
      
    },
    accept2: {
      type: Boolean
      
    },



  }
);

module.exports = mongoose.model('connections', connection_schema);
