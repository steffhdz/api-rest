const express= require ('express');
const path = require('path');
const logger = require('./middlewares/logger');
const books = require('./Books')

const app=express();
const port =4000;

// Run middleware
app.use(logger);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// API route
app.use('/api/books', require('./routes/api/books'));

// Folder static
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => console.log('on port 4000'));