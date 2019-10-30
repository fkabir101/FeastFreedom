const router = require('express').Router();
const kitchenController = require('../../controllers/kitchenController');
const multer = require('multer');
const storage = multer.diskStorage({
  destination : function(req, file, callback){
    
    callback(null, 'src/assets/uploads');
  },
  filename : function(req, file, callback){
    callback(null, (new Date().toISOString() + file.originalname).replace(/[&\/\\#,+()$~%'":*?<>{}]/g,'_'));
  }
})
const upload = multer({storage: storage,limit: {fileSize: 1024*1024*5}});
// register a new kitchen ("/api/kitchen/")
router
  .route('/')
  .get(kitchenController.findAll)

// register a new kitchen ("/api/kitchen/create")
router
  .route('/create')
  .post(upload.single('kitchenImage') , kitchenController.createKitchen);

module.exports = router;