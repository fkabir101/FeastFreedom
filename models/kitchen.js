const mongoose = require('mongoose');

const KitchenSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true,
    index: true,
  },
  workingDays:[Boolean],
  startHour:{
    type: Number,
    required: true
  },
  endHour:{
    type: Number,
    required: true
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  imgLocation: { 
    type: String
  }
});

const Kitchen = mongoose.model('Kitchen', KitchenSchema);
KitchenSchema.index('name');
module.exports = Kitchen;