const db = require('../models');
const mongoose = require("mongoose");

module.exports = {
  createMenuItem : function (req, res){
    let menu = [];
    for(var i = 0 ; i < req.body.length; i++){
      menu[i] = {
        name : req.body[i].name,
        vegi : req.body[i].vegi,
        price : req.body[i].price,
        kitchen : mongoose.Types.ObjectId(req.body[i].kitchen)
      }
    }
    db.Menu.collection.insertMany(menu)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json)
    // db.Menu
    //   .create(
    //     {
    //       name: req.body.name,
    //       vegi: req.body.vegi,
    //       price: req.body.price,
    //       kitchen: req.body.kitchenId
    //     }
    //   )
    //   .then(dbModel => res.json(dbModel))
    //   .catch(err => res.status(422).json(err))
  },

  findByKitchenId: function(req, res){
    db.Menu
      .find({"kitchen" : mongoose.Types.ObjectId(req.params.kitchen)})
      .then(dbModel => {
        res.json({ dbModel })})
      .catch(err => res.status(422).json(err));
  }
} 