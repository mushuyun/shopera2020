const express = require('express');
const Product = require('../models/Product.js');
const { getToken, isAuth } = require('../auth.js');


const router = express.Router();



module.exports = router;