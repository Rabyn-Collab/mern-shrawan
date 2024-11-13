import express from 'express';
import { loginUser, signUpUser } from '../controllers/userController.js';
import Joi from 'joi';
import validator from 'express-joi-validation';

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

router.route('/users/login').post(validate.body(loginSchema), loginUser);
router.route('/users/signup').post(validate.body(signUpSchema), signUpUser);

export default router;

