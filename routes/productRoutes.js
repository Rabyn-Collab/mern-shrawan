import express from 'express';

import { createProduct, getAllProducts } from '../controllers/productController.js';

const router = express.Router();

router.route('/products').get(getAllProducts).post(createProduct);
router.route('/products/:id').get().patch().delete();

export default router;

