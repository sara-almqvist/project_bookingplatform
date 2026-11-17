import express from 'express';

const router = express.Router();

router
  .route('/')
  .get((req, res, next) => {}) //Hämta användarens bokningar (User) eller alla bokningar (Admin)
  .post((req, res, next) => {}); //Skapa en ny bokning

router
  .route('/:id')
  .put((req, res, next) => {}) //Uppdatera en bokning
  .delete((req, res, next) => {}); //Ta bort en bokning
//Ska bara kunna göras av skaparen eller Admin

export default router;
