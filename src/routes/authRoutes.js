import express from 'express';
import { validateCredentials, validateNewUser } from '../middleware/auth.js';
import {
  registerController,
  logInController,
} from '../controllers/authControllers.js';

const router = express.Router();

//Registrera ny användare
router.post(
  '/register',
  validateCredentials,
  validateNewUser,
  registerController
);

//Logga in och få en JWT-token
router.post('/login', validateCredentials, logInController);

export default router;
