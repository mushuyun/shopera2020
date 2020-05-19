const ObjectId = require("mongoose").Types.ObjectId;
const db = require("../models");

// Defining methods for the cartItemController
module.exports = {
  findAll: function(req, res) {
    if (req.user) {
      db.User
        .find({ _id: req.user._id })
        .populate({ path: "product", options: { sort: { 'date': -1 } } })
        .then(users => {
          res.json({ product: users[0].product });
        })
        .catch(err => res.status(422).json(err));
    } else {
      return res.json({ product: null });
    }
  },
  findById: function(req, res) {
    if (req.user) {
      db.User
        .find({ _id: req.user._id })
        .populate("product")
        .then(users => {
          const cartItem = users[0].product.filter(b => b._id.toString() === req.params.id);
          res.json({ cartItem: cartItem[0] });
        })
        .catch(err => res.status(422).json(err));
    } else {
      return res.json({ cartItem: null });
    }
  },
  create: function(req, res) {
    db.Book
      .create(req.body)
      .then(dbProd => {
        return db.User.findOneAndUpdate({ _id: req.user._id }, { $push: { product: dbProd._id } }, { new: true });
      })
      .then((dbUser) => {
        // If the User was updated successfully, send it back to the client
        res.json(dbUser);
      })
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Book
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => {
        console.log(dbModel);
        res.json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.User.findOneAndUpdate({ _id: req.user._id }, { $pull: { product: new ObjectId(req.params.id) } }, { new: true })
      .then(() => {
        db.Book
          .findOneAndDelete({ _id: req.params.id })
          .then(dbProd => res.json(dbProd))
          .catch(err => res.status(422).json(err));
      });
  }
};
