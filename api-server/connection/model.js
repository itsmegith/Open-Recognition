const mongoose = require('mongoose');

const connection_schema = mongoose.Schema(
  {
    user1_id: {
      type: int
      
    },
    user2_id: {
      type: int
      
    },
    accept1: {
      type: Boolean
      
    },
    accept2: {
      type: Boolean
      
    },
    story:{
      type: String
    },
    date: {
      type: date,
      default: date.now
    }
    



  }
);

module.exports = mongoose.model('connections', connection_schema);
