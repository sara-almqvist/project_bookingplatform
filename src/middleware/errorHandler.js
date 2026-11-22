export function errorHandler(err, req, res, next) {
  console.error('Serverfel', err);
  // Om ett svar redan har börjat skickas, låt Express standardhanterare ta över
  if (res.headersSent) {
    return next(err);
  }

  // Hantera dubbletter i MongoDB/Mongoose (t.ex. om unikt användarnamn krockar)
  if (err.code === 11000) {
    return res.status(409).json({
      error: 'Resursen finns redan i databasen (dubblett)',
    });
  }

  // Hantera valideringsfel från Mongoose
  if (err.name === 'ValidationError') {
    return res.status(400).json({
      error: 'Ogiltig indata',
      details: err.message,
    });
  }

  // Standardfel (500 Internal Server Error)
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Ett oväntat serverfel inträffade';

  res.status(statusCode).json({
    error: message,
  });
}
