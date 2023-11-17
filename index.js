const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { insertToDB, subscriptionDB, locationDB, connectToDatabase } = require('./db');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('frontend'));
app.use(express.urlencoded({ extended: true }));

// Route for the main page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/frontend/index.html');
});
  
// Route for the signin page
app.get('/signin', (req, res) => {
    res.sendFile(path.join(__dirname, '/frontend/signin/index.html'));
});

// Handle form submission on the signin page by calling the function in index.js
app.post('/signin', require('./frontend/signin/index'));

// Route for the signup page
app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, '/frontend/signup/'));
});

// Handle form submission on the signup page by calling the function in index.js
app.post('/signup', require('./frontend/signup/index'));

app.get('/get-user-info', require('./frontend/signin/index'));
app.get('/logout-user', require('./frontend/signin/index'));
app.post('/user-location', require('./frontend/signin/index'));

app.post('/user-plan', async (req, res) => {

  try {
      // Retrieve data from the request body
      const plan = req.body.plan;
      const email = req.body.email;
  
      const dbName = "dbUserAccount";
      const dbCollection = "Users";
    
      await connectToDatabase(); // Ensure the client is connected before inserting
      await subscriptionDB(dbName, dbCollection, email, plan);
    
      res.send("successful add user plan...");
  } catch (error) {
    console.error('Error finding document:', error);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});