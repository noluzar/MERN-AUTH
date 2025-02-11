import express from "express";
import dotenv from 'dotenv';
import productRoutes from "./routes/product.route.js";
import adminRoutes from './routes/adminRoutes.js'

dotenv.config();
import cookieParser from "cookie-parser";
import { notFound, errorHandler } from "./middleware/errorMiddleWare.js"; 
import connectDB from "./config/db.js";
const port = process.env.PORT || 5000;
import userRoutes from './routes/userRoutes.js';

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(cookieParser());

app.use('/api/admin', adminRoutes);
app.use("/api/products", productRoutes);
app.use('/api/users', userRoutes);

app.get('/', (req, res) => res.send('Server is ready'));

app.use(notFound);
app.use(errorHandler);


app.listen(port, () => console.log(`Server started on port ${port}`));