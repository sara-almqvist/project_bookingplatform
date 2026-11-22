import { User } from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

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

export const logInController = async (req, res, next) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  const ok = user && (await bcrypt.compare(password, user.password));
  if (!ok) {
    return res.status(401).json({ error: 'Fel användarnamn eller lösenord' });
  }
  const payload = { id: user._id, username: user.username, role: user.role };
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
};
