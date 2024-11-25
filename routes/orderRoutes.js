import express from 'express';
import { adminCheck, userCheck } from '../middlewares/authCheck.js';
import { getAllOrder } from '../controllers/orderController.js';



const router = express.Router();

router.route('/').get(userCheck, adminCheck, getAllOrder);

export default router;

