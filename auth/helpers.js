const bcrypt = require("bcryptjs");
const db = require("../db/index");

// Compare userPassword from the request to databasePassword from the database
function comparePass(userPassword, databasePassword) {
  // databasePassword has hash and salt
  return bcrypt.compareSync(userPassword, databasePassword);
}

function createHash(password) {
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(password, salt);
  return hash;
}

function createCustomer(req, res) {
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(req.body.password, salt);
  return db.none(
      "INSERT INTO customers (username, firstname, lastname, email, password_digest, date_acct_created) VALUES (${username}, ${firstname},  ${lastname}, ${email}, ${password}, NOW())", {
          username: req.body.username,
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          email: req.body.email,
        //   tier: req.body.tier,
          password: hash
      }
  )
}

function loginRequired(req, res, next) {
  // if the user is logged in, passport will have attached
  // the user to it
  if (!req.user) {
    return res.status(401).json({ status: "Please log in." });
  }
  return next();
}

module.exports = {
  comparePass,
  createHash,
  createCustomer,
  loginRequired
};
