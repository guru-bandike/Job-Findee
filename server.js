import app from './app.js';

const port = 5000; // Define port number

// Start the server
app.listen(port, () => {
  console.log('Server is listening on ' + port);
});
