import express from 'express';
import authRoutes from './routes/authRoutes.js';
import roomsRoutes from './routes/roomsRoutes.js';
import bookingsRoutes from './routes/bookingsRoutes.js';

export const app = express();

app.use(express.json());

app.use('/auth', authRoutes);
app.use('/rooms', roomsRoutes);
app.use('/bookings', bookingsRoutes);

app.get('/', (req, res, next) => {
  res.json({ message: 'Det fungerar' });
});
