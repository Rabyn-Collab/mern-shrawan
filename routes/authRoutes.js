import express from 'express';
import { loginUser, signUpUser } from '../controllers/userController.js';



const router = express.Router();

router.route('/users/login').post(loginUser);
router.route('/users/signup').post(signUpUser);

export default router;

