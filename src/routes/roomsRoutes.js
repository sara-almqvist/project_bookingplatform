import express from 'express';

const router = express.Router();

//Endast Admin för samtliga roomRoutes
router
  .route('/')
  .get((req, res, next) => {})
  .post((req, res, next) => {});

router
  .route('/:id')
  .put((req, res, next) => {})
  .delete((req, res, next) => {});

export default router;
