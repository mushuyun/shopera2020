const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const userRoute = require ("./routes/userRoute");
const productRoute = require("./routes/productRoute");
const orderRoute = require("./routes/orderRoute");
const auth = require("./auth.js");
const config = require("./config");
const models = require("./models");

if (process.env.NODE_ENV !== "production") {
	console.log("loading dev environments");
	require("dotenv").config();
}

// Connect to the Mongo DB
const mongoose = require("mongoose");
const mongodbUrl = config.MONGODB_URI;
mongoose.connect(mongodbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}).catch((error) => console.log(error.reason));

// Middlewares
const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, "../client/public")));
app.use("/api/users", userRoute);
//app.use("/api/products", productRoute);
//app.use("/api/orders", orderRoute);

// If its production environment!
if (process.env.NODE_ENV === "production") {
	const path = require("path");
	// console.log("YOU ARE IN THE PRODUCTION ENV");
	app.use("/static", express.static(path.join(__dirname, "../client/build/static")));
	app.get("/", (req, res) => {
		res.sendFile(path.join(__dirname, "../client/build/"))
	});
}

// Add routes, both API and view
// app.get("/api/config/paypal", (req, res) => {
//   res.send(config.PAYPAL_CLIENT_ID);
// });

// Error handler
app.use(function(err, req, res, next) {
	console.log("====== ERROR =======");
	console.error(err.stack);
	res.status(500);
});

// Starting Server
const PORT = config.PORT;
app.listen(PORT, () => {
  console.log(`🌎 ==> Server listening on PORT ${PORT}!`);
});