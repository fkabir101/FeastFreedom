const mongoose = require('mongoose');

const MenuSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true,
    index: true,
  },
  vegi:{
    type: Boolean
  },
  price:{
    type: Number,
    required: true
  },
  kitchen:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Kitchen',
    required: true
  }
})

const Menu = mongoose.model('Menu', MenuSchema);
MenuSchema.index('name');
module.exports = Menu;