const serverless = require("serverless-http");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const productRoutes = require("../routes/product.route.js");
const adminRoutes = require("../routes/adminRoutes.js");
const orderRoutes = require("../routes/orderRoutes.js");
const dashboardRoutes = require("../routes/dashboardRoutes.js");
const userRoutes = require("../routes/userRoutes.js");

const { notFound, errorHandler } = require("../middleware/errorMiddleWare.js");
const connectDB = require("../config/db.js");
require("dotenv").config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/admin", adminRoutes);
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api", dashboardRoutes);

app.get("/", (req, res) => res.send("Server is ready"));

app.use(notFound);
app.use(errorHandler);

module.exports.handler = serverless(app);
