import { app } from './app.js';

const port = Number(process.env.PORT ?? 3000);

app.listen(port, (error) => {
  if (error) throw error;
  console.log(`Servern lyssnar på port ${port}`);
});
