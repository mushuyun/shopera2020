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
      // user: req.body.user._id,
      orderItems: buyerCart,
      shipping: req.body.shippingInfo,
      // totalPrice: 100
      totalPrice: req.body.total
    });

    const newOrder = await order.save();
    if (newOrder) {
      res.send({
        _id: newOrder.id,  
      })
    } else {
      res.status(401).send({ msg: 'Error on DB Save' });
    }
  
  });


    router.get("/", isAuth, async (req, res) => {
      const orders = await Order.find({}).populate('user');
      res.send(orders);
    });

    router.get("/user/", isAuth, async (req, res) => {
      const orders = await Order.find({ user: req.user._id });
      res.send(orders);
    });

    router.get("/:id", isAuth, async (req, res) => {
      const order = await Order.findOne({ _id: req.params.id });
      if (order) {
        res.send(order);
      } else {
        res.status(404).send("Order Not Found.")
      }
    });

    router.delete("/:id", isAuth, isAdmin, async (req, res) => {
      const order = await Order.findOne({ _id: req.params.id });
      if (order) {
        const deletedOrder = await order.remove();
        res.send(deletedOrder);
      } else {
        res.status(404).send("Order Not Found.")
      }
    });

  // router.post("/", isAuth, async (req, res) => {
  //   const newOrder = new Order({
  //     orderItems: req.body.orderItems,
  //     user: req.user._id,
  //     shipping: req.body.shipping,
  //     payment: req.body.payment,
  //     itemsPrice: req.body.itemsPrice,
  //     taxPrice: req.body.taxPrice,
  //     shippingPrice: req.body.shippingPrice,
  //     totalPrice: req.body.totalPrice,
  //   });
  //   const newOrderCreated = await newOrder.save();
  //   res.status(201).send({ message: "New Order Created", data: newOrderCreated });
  // });

  // router.put("/:id/pay", isAuth, async (req, res) => {
  //   const order = await Order.findById(req.params.id);
  //    if (order) {
  //   //   order.isPaid = true;
  //   //   order.paidAt = Date.now();
  //   //   order.payment = {
  //   //     paymentMethod: 'paypal',
  //   //     paymentResult: {
  //   //       payerID: req.body.payerID,
  //   //       orderID: req.body.orderID,
  //   //       paymentID: req.body.paymentID
  //   //     }
  //   //   }
  //     const updatedOrder = await order.save();
  //     res.send({ message: 'Order Paid.', order: updatedOrder });
  //   } else {
  //     res.status(404).send({ message: 'Order not found.' })
  //   }
  // });

module.exports = router;