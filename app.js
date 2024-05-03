// Import necessary External Modules
import express from 'express';
import expressEjsLayouts from 'express-ejs-layouts';

// Import necessary Core Modules
import path from 'path';

// Import necessary internal modules
import HomeController from './src/controllers/home.controller.js';

// Create Express server instance
const app = express();

// Setup view engine
app.set('view engine', 'ejs'); // Set EJS as view engine
app.set('views', path.join(path.resolve(), 'src', 'views')); // Set views directory

// Use necessary middlewares
app.use(expressEjsLayouts); // Use express-ejs-layouts library for layout
app.use(express.static('public')); // Serve static files from the 'public' directory for client-side assets

// Define routes and corresponding controllers
app.get('/', HomeController.getHomeView);

// Export Express server instance as default
export default app;
