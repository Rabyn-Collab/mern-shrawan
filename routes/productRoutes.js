import express from 'express';

import { createProduct, getProducts, getTopProducts, removeProduct } from '../controllers/productController.js';
import { adminCheck, userCheck } from '../middlewares/authCheck.js';
import { fileCheck } from '../middlewares/fileCheck.js';

const router = express.Router();

router.route('/').get(getProducts).post(userCheck, adminCheck,
  fileCheck, createProduct);
router.route('/top-5-products').get(getTopProducts, getProducts);
router.route('/:id').get().patch().delete(removeProduct);

export default router;

