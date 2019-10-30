const router = require("express").Router();
const userRouts = require("./user");
const kitchenRoutes = require('./kitchen');
const menuRoutes = require('./menu');

router.use('/user', userRouts);
router.use('/kitchen', kitchenRoutes);
router.use('/menu', menuRoutes);

module.exports = router;