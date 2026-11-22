import { User } from '../models/User.js';

export const registerController = async (req, res, next) => {
  const { username } = req.body;
  const { hashedPassword } = req;

  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(409).json({ error: 'Användarnamnet är upptaget' });
    }
    const user = await User.create({ username, password: hashedPassword });
    return res.status(201).json({
      message: 'Användare skapad',
      user: { id: user._id, username: user.username, role: user.role },
    });
  } catch (error) {
    next(error);
  }
};
