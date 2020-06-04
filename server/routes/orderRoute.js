const express = require("express");
const Order = require("../models/Order.js");
const { isAuth, isAdmin } = require("../auth.js");


const router = express.Router();

router.post('/saveOrder', async (req, res) => {
    let cart = req.body.cartInfo;
    let buyerCart = cart.map(item => {
        let container = {};
        container["name"] = item.product.name;
        container["qty"] = item.qty;
        container["image"] = item.product.image;
        container["price"] = item.product.price;
        container["product"] = item.product._id;
        
        return container;
    })
    
    const order = new Order({
      user: req.body.userInfo,
      orderItems: buyerCart,
      shipping: req.body.shippingInfo,
      totalPrice: 100
    });

    const newOrder = await order.save();
    if (newOrder) {
      res.send({
        _id: newOrder.id,  
      })
    } else {
      res.status(401).send({ msg: 'Error on DB Save' });
    }
  
  })

module.exports = router;