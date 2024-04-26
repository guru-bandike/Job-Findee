// import necessary External Modules
import express from 'express';
import expressEjsLayouts from 'express-ejs-layouts';

// import necessary Core Modules
import path from 'path';

// Create Express server instance
const app = express();

// Setup view engine
app.set('view engine', 'ejs'); // Set EJS as view engine
app.set('views', path.join(path.resolve(),'src', 'views')); // Set views directory

// Use necessary middlewares
app.use(expressEjsLayouts);

// Export app as default
export default app;