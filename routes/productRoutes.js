import express from 'express';

import { createProduct, getProduct, getProducts, getTopProducts, removeProduct, updateProduct } from '../controllers/productController.js';
import { adminCheck, userCheck } from '../middlewares/authCheck.js';
import { fileCheck, updateFileCheck } from '../middlewares/fileCheck.js';

const router = express.Router();

router.route('/').get(getProducts).post(userCheck, adminCheck,
  fileCheck, createProduct);

router.route('/top-5-products').get(getTopProducts, getProducts);

router.route('/:id').get(getProduct).patch(userCheck, adminCheck, updateFileCheck, updateProduct).delete(removeProduct);

export default router;

