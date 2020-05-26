const router = require("express").Router();
const cartItemController = require("../../controller/cartItemController");

// Matches with "/api/cartitems"
router.route("/")
  .get(cartItemController.findAll)
  .post(cartItemController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(cartItemController.findById)
  .put(cartItemController.update)
  .delete(cartItemController.remove);

module.exports = router;
