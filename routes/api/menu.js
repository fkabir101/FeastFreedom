const router = require('express').Router()
const menuController = require('../../controllers/menuController');

// get all menu items for kitchen ("/api/menu/:kitchenid")
router
  .route("/:kitchen")
  .get(menuController.findByKitchenId)

// register new menu item ("/api/menu/create")
router
  .route('/create')
  .post(menuController.createMenuItem)

module.exports = router;