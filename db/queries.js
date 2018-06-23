// var pgp = require('pg-promise')({});
// var connectionString = 'postgres://localhost/vicar';
var db = require("./index")

const authHelpers = require("../auth/helpers");
const passport = require("../auth/local");

const loginCustomer = (req, res, next) => {
    passport.authenticate("local", {});
    const authenticate = passport.authenticate("local", (err, user, info) => {
        if (err) {
            res.status(500).send("error while trying to log in");
        } else if (!user) {
            res.status(401).send("invalid username/password");
        } else if (user) {
            req.logIn(user, err => {
                if (err) {
                    res.status(500).send("error");
                } else {
                    res.status(200).send({ ...req.user,
                        password_digest: null
                    });
                }
            });
        }
    });
    return authenticate(req, res, next);
};

const logoutCustomer = (req, res, next) => {
    req.logout();
    res.status(200).send("Log out success");
};

const registerCustomer = (req, res, next) => {
    return authHelpers
        .createCustomer(req)
        .then(response => {
            passport.authenticate("local", (err, user, info) => {
                if (user) {
                    res.status(200).json({
                        status: "success",
                        data: user,
                        message: "Registered one user"
                    });
                }
            })(req, res, next);
        })
        .catch(err => {
            console.log(error);
            res.status(500).json({
                status: "Error",
                error: err
            });
        });
};

const postVehicleInfo = (req, res, next) => {
    db.
    none(
        "INSERT into vehicles (car_owner_id, car_year, car_make, car_model) VALUES (${car_owner_id}, ${car_year}, ${car_make}, ${car_model})", {
            car_owner_id: req.user.id,
            car_year: req.body.car_year,
            car_make: req.body.car_make,
            car_model: req.body.car_model
        }
    )
    .then(data=>{
        res.status(200).json({
            status: "Success",
            message:"Inserted New Vehicle"
        }) 
    })
    .catch(err=>{
        return next(err)
    })
};

const getAllVehicles = (req, res, next) => {
    db
      .any("SELECT * from vehicles WHERE car_owner_id = ${id}", req.user)
      .then(vehicles => {
        res.status(200).json({
          status: "Success!",
          data: vehicles,
          message: "Got all the cars!"
        });
      });
  };

// updateSingleUser = (req, res, next) => {
//   // const hash = authHelpers.createHash(req.body.password);
//   db
//     .none(
//       "UPDATE customer SET username = ${username},  imgurl = ${imgurl}, firstname = ${firstname}, lastname = ${lastname}, email = ${email}, blurb = ${blurb}, public_id= ${public_id} WHERE id = ${id}",
//       {
//         username: req.body.username,
//         firstname: req.body.firstname,
//         lastname: req.body.lastname,
//         email: req.body.email,
//         // password: hash,
//         blurb: req.body.blurb,
//         imgurl: req.body.imgurl,
//         public_id: req.body.public_id,
//         id: req.user.id
//       }
//     )
//     .then(data => {
//       res.status(200).json({
//         status: "Success!",
//         message: "Changed the user"
//       });
//     })
//     .catch(err => {
//       console.log("Bruhh,...");
//       return next(err);
//     });
// };

// const getSingleUser = (req, res, next) => {
//   db
//     .one("SELECT * FROM users WHERE username = ${username}", req.user)
//     .then(data => {
//       res.status(200).json({
//         status: "success",
//         userInfo: data,
//         message: "Fetched one user"
//       });
//     })
//     .catch(err => {
//       return next(err);
//     });
// };

// const getUserByUsername = (req, res, next) => {
//   console.log("the req in getUserByUsername:", req);
//   db
//     .any("SELECT * FROM users WHERE username = ${username}", req.params)
//     .then(data => {
//       res.status(200).json({
//         status: "success",
//         user: data,
//         message: `Retrieved user: ${req.params.username}!`
//       });
//     })
//     .catch(err => {
//       console.log(`err in getUserByUsername`, err);
//       res.status(500).json({ message: `FAILED: getUserByUsername` });
//     });
// };

module.exports = {
    loginCustomer,
    logoutCustomer,
    registerCustomer,
    postVehicleInfo,
    getAllVehicles,
    //   getUserByUsername,
    //   updateSingleUser,
};