import express from 'express';

import { getProducts } from '../controllers/productController.js';

const router = express.Router();

router.route('/').get(getProducts);
// router.route('/products/:id').get().patch().delete();

export default router;

