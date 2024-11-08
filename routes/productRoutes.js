// all_products             /products
// mobile_products
// kitechen_products
// create_products
import express from 'express';
import { getAllProducts } from '../controllers/productController.js';

const router = express.Router();

router.route('/products').get(getAllProducts);
//router.route('/products').get((req, res) => getAllProducts(req, res));


export default router;

