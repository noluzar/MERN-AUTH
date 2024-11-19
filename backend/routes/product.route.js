import express from "express";
import { createProduct, deleteProduct, getProducts, updateProduct } from "../controllers/product.controller.js";


const router = express.Router();
// GET ALL PRODUCTS
router.get("/", getProducts);

//CREATE PRODUCTS
router.post("/", createProduct);

//UPDATE PRODUCT
router.put('/:id', updateProduct);

// Delete PRODUCT
router.delete("/:id", deleteProduct);



export default router;