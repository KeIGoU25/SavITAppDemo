const express = require('express');
const router = express.Router();
const { insertToDB, findToDB, connectToDatabase } = require('../../db');

// Handle form submission on the signup page
router.post('/signup', async (req, res) => {

  const dbName = "dbUserAccount";
  const dbCollection = "Users";

  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const email = req.body.email;
  const password = req.body.password;
  const confirm_password = req.body.confirm_password;

  const emailExist = await findToDB(dbName, dbCollection, email);

  console.log(emailExist);

  if (emailExist !== null) {
    res.redirect("./signup/?alert=email");
  } else {
    const content = {
      firstname: `${firstname}`,
      lastname: `${lastname}`,
      email: `${email}`,
      password: `${password}`,
      confirm_password: `${confirm_password}`,
    };
  
    await connectToDatabase(); // Ensure the client is connected before inserting
    await insertToDB(dbName, dbCollection, content);
  
    res.redirect('./signin/');
  }
});

module.exports = router;
