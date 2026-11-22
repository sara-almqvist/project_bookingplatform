import { app } from './src/app.js';
import connectDB from './src/config/db.js';

const port = Number(process.env.PORT ?? 3000);

await connectDB();

app.listen(port, (error) => {
  if (error) throw error;
  console.log(`Servern lyssnar på port ${port}`);
});
