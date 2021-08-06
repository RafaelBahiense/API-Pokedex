import Joi from "joi";

export const Register = Joi.object({
  email: Joi.string().email(),
  password: Joi.string().min(1),
  confirmPassword: Joi.string().min(1),
});

export const Login = Joi.object({
  email: Joi.string().email(),
  password: Joi.string().min(1),
});
