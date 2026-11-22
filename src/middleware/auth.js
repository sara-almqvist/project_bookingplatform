import bcrypt from 'bcrypt';
import { isText } from '../utils/helpfunctions.js';
import jwt from 'jsonwebtoken';

export function validateCredentials(req, res, next) {
  const { username, password } = req.body ?? {};
  if (!isText(username) || !isText(password)) {
    return res.status(400).json({ error: 'Fyll i användarnamn och lösenord' });
  }

  next();
}

//Always use validateCredentials before validateNewUser!
export async function validateNewUser(req, res, next) {
  const { password } = req.body;

  if (password.length < 8) {
    return res
      .status(400)
      .json({ error: 'Lösenordet måste vara minst 8 tecken långt' });
  }
  if (!/[A-ZÅÄÖ]/.test(password)) {
    return res
      .status(400)
      .json({ error: 'Lösenordet måste innehålla minst en stor bokstav' });
  }

  if (!/[a-zåäö]/.test(password)) {
    return res
      .status(400)
      .json({ error: 'Lösenordet måste innehålla minst en liten bokstav' });
  }

  if (!/\d/.test(password)) {
    return res
      .status(400)
      .json({ error: 'Lösenordet måste innehålla minst en siffra' });
  }

  if (!/[^A-Za-zÅÄÖåäö\d]/.test(password)) {
    return res
      .status(400)
      .json({ error: 'Lösenordet måste innehålla minst ett specialtecken' });
  }
  try {
    req.hashedPassword = await bcrypt.hash(password, 10);
    next();
  } catch (error) {
    next(error);
  }
}

//Check valid JWT
export function requireAuth(req, res, next) {
  const header = req.get('Authorization') ?? '';
  const [scheme, token] = header.split(' ');

  if (scheme !== 'Bearer' || !token) {
    return res.status(401).json({ error: 'Logga in först' });
  }

  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ error: 'Ogiltig token' });
  }
}

//Check valid role
export function requireRole(role) {
  return (req, res, next) => {
    if (req.user.role !== role) {
      return res.status(403).json({ error: 'Behörighet saknas' });
    }
    next();
  };
}
