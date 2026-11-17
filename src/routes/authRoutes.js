import express from 'express';

const router = express.Router();

//Routes for register new user, log in and reset password(?)

router.post('/register', (req, res, next) => {}); //Registrera en ny användare

router.post('/login', (req, res, next) => {}); //Logga in och få en JWT-token

export default router;
