const express = require("express");
const dotenv = require("dotenv");
const productRoutes = require("../routes/product.route.js");
const adminRoutes = require("../routes/adminRoutes.js");
const orderRoutes = require("../routes/orderRoutes.js");
const dashboardRoutes = require("../routes/dashboardRoutes.js");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { notFound, errorHandler } = require("../middleware/errorMiddleWare.js");
const connectDB = require("../config/db.js");
const userRoutes = require("../routes/userRoutes.js");

dotenv.config();

const port = process.env.PORT || 5000;

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

app.listen(port, () => console.log(`Server started on port ${port}`));
