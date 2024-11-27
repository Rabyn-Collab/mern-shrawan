import express from 'express';
import { loginUser, signUpUser, updateUser } from '../controllers/userController.js';
import Joi from 'joi';
import validator from 'express-joi-validation';
import { userCheck } from '../middlewares/authCheck.js';

const validate = validator.createValidator({});


const signUpSchema = Joi.object({
  fullname: Joi.string().min(4).max(25).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(4).max(25).required(),
});
const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(4).max(25).required(),
});

const router = express.Router();

router.route('/signup').post(validate.body(signUpSchema), signUpUser);
router.route('/login').post(validate.body(loginSchema), loginUser);
router.route('/update').patch(userCheck, updateUser);


export default router;

