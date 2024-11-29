import express from 'express';
import { adminCheck, userCheck } from '../middlewares/authCheck.js';
import { addOrder, getAllOrder, getOrderUser } from '../controllers/orderController.js';



const router = express.Router();

router.route('/').get(userCheck, adminCheck, getAllOrder).post(userCheck, addOrder);

router.route('/users').get(userCheck, getOrderUser);

export default router;

