import express from 'express';
import { validateCredentials, validateNewUser } from '../middleware/auth.js';
import { registerController } from '../controllers/authControllers.js';

const router = express.Router();

//Routes for register new user, log in and reset password(?)

router.post(
  '/register',
  validateCredentials,
  validateNewUser,
  registerController
); //Registrera en ny användare

router.post('/login', validateCredentials, (req, res, next) => {}); //Logga in och få en JWT-token

export default router;
