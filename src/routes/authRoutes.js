import express from 'express';
import { validateCredentials, validateNewUser } from '../middleware/auth.js';
import { registerController } from '../controllers/authControllers.js';

const router = express.Router();

//Route for register new user

router.post(
  '/register',
  validateCredentials,
  validateNewUser,
  registerController
);

//Route for log in
router.post('/login', validateCredentials, (req, res, next) => {}); //Logga in och få en JWT-token

export default router;
