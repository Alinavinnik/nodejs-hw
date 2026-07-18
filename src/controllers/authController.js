import { User } from '../models/user.js';
import createHttpError from 'http-errors';

export const authController = async (req, res) => {
  const { email } = req.body;
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw createHttpError(400, 'Email in use');
  }
  res.status(201).json({});
};
