const path = require("path");
const router = require("express").Router();
const cors = require('cors')

router.use(cors())

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  next();
});
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

module.exports = router;