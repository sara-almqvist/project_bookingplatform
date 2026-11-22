import express from 'express';
import { requireAuth, requireRole } from '../middleware/auth.js';

const router = express.Router();

router
  .route('/')
  .get(requireAuth, (req, res, next) => {}) //Hämta användarens bokningar (User) eller alla bokningar (Admin)
  .post(requireAuth, (req, res, next) => {}); //Skapa en ny bokning

router
  .route('/:id')
  .put(requireAuth, (req, res, next) => {}) //Uppdatera en bokning
  .delete(requireAuth, (req, res, next) => {}); //Ta bort en bokning
//Ska bara kunna göras av skaparen eller Admin

export default router;
