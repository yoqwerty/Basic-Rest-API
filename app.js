const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv/config');
const postsRoute = require('./routes/posts.js');
const cors = require('cors');

//Middlewares - middleware are functions that execute during the lifecycle of a request to the Express server. 
// Each middleware has access to the HTTP request and response for each route (or path) it's attached to
app.use(cors());
//parses the body
app.use(express.json());
app.use('/posts', postsRoute);

//Routes
/** app.get('/', (req, res) => {
    res.send('We are on homepage');
}) **/

//connect to DB 
mongoose
  .connect(process.env.DB_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true})
  .then(() => console.log("Database connected!"))
  .catch(err => console.log(err));

//port where u want to listen
app.listen(3000); 
