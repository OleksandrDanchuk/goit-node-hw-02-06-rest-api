const { Schema, model } = require('mongoose');
const Joi = require('joi');

const userSchema = new Schema(
  {
    password: {
      type: String,
      required: [true, 'Set password for user'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
    },
    subscription: {
      type: String,
      enum: ['starter', 'pro', 'business'],
      default: 'starter',
    },
    avatarURL: String,
    token: String,
  },
  { versionKey: false }
);

userSchema.post('save', (error, data, next) => {
  const { name, code } = error;
  console.log(name);
  console.log(code);
  const status = name === 'MongoServerError' && code === 11000 ? 409 : 400;
  error.status = status;
  next();
});

const registerSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
});

const loginSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
});

const subscriptionSchema = Joi.object({
  subscription: Joi.string().valid('starter', 'pro', 'business').required(),
});

const schemas = { registerSchema, loginSchema, subscriptionSchema };

const User = model('user', userSchema);

module.exports = {
  schemas,
  User,
};
