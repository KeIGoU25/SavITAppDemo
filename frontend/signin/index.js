const express = require('express');
const path = require('path');
const session = require('express-session');
const router = express.Router();
const { loginDB, locationDB, connectToDatabase } = require('../../db');
const { v4: uuidv4 } = require('uuid');

const constantSecret = 'savITv1'; // Replace with a strong and constant secret

// Use express-session middleware
router.use(session({
  secret: `${uuidv4()}-${constantSecret}`, // Use UUID as part of the session secret
  resave: false,
  saveUninitialized: true,
}));

// Handle form submission on the signin page
router.post('/signin', async (req, res) => {
  const dbName = "dbUserAccount";
  const dbCollection = "Users";

  const email = req.body.email;
  const password = req.body.password;

  await connectToDatabase(); // Ensure the client is connected before inserting
  let result = await loginDB(dbName, dbCollection, email, password);

  if (result === "no email") {
    res.redirect("./signin/?alert=email");
  } else if (result === "wrong password") {
    res.redirect("./signin/?alert=password");
  } else {
    // Store user information in the session
    req.session.userInfo = result;

    console.log("success");
    res.redirect("/");
  }
});

router.post('/user-location', async (req, res) => {

  try {
      // Retrieve data from the request body
      const city = req.body.city;
      const municipality = req.body.municipality;
      const email = req.body.email;
      let location = city;
      if (municipality !== "") {
        location = municipality + ", " + city;
      }

      const userInfo = req.session.userInfo;
      userInfo.location = location;
  
      const dbName = "dbUserAccount";
      const dbCollection = "Users";
    
      await connectToDatabase(); // Ensure the client is connected before inserting
      await locationDB(dbName, dbCollection, email, location);
    
      res.send("successful add location...");
  } catch (error) {
    console.error('Error finding document:', error);
  }
});


// Route to get user information
router.get('/get-user-info', (req, res) => {
  //Check if the user is logged in
  if (req.session && req.session.userInfo) {
    const userInfo = req.session.userInfo;
    res.json(userInfo);
  } else {
    res.json({ error: "User not logged in" });
  }
});

router.get('/logout-user', (req, res) => {
  req.session.userInfo = "";

  res.send("User was logout...");
});

module.exports = router;
