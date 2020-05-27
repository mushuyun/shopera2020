const router = require("express").Router();
const orderRoutes = require("./order");

// Order routes
router.use("/order", orderRoutes);

module.exports = router;
