// USE THIS AS REFERENCE FOR IMAGE UPLOADE https://www.youtube.com/watch?v=srPXMt1Q0nY




const db = require('../models');
const Kitchen = require ('../models/kitchen');
const multer = require('multer');
const storage = multer.diskStorage({
  destination : function(req, file, callback){
    
    callback(null, '../src/assets/uploads');
  },
  filename : function(req, file, callback){
    callback(null, new Date().toISOString() + file.originalname);
  }
})
const upload = multer({storage: storage,limit: {fileSize: 1024*1024*5}});

module.exports = {
  createKitchen: function (req, res) {
    db.Kitchen
      .create(
        {
          name: req.body.name,
          workingDays: JSON.parse("[" + req.body.workingDays + "]"),
          startHour: req.body.startHour,
          endHour: req.body.endHour,
          creator: req.body.creator,
          imgLocation: req.file.filename
        }
        )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAll: function (req, res) {
    db.Kitchen
      .find()
      .limit(20)
      .then(dbModel => {
        res.json(dbModel)
      })
      .catch(err => {
        console.log(err);
        res.status(422).json(err)
      });
  },
}