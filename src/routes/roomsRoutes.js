import express from 'express';
import { requireAuth, requireRole } from '../middleware/auth';

const router = express.Router();

//Endast Admin för samtliga roomRoutes
router
  .route('/')
  .get(requireAuth, requireRole('admin'), (req, res, next) => {})
  .post(requireAuth, requireRole('admin'), (req, res, next) => {});

router
  .route('/:id')
  .put(requireAuth, requireRole('admin'), (req, res, next) => {})
  .delete(requireAuth, requireRole('admin'), (req, res, next) => {});

export default router;
