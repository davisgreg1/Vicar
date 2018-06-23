let db = require("../db/queries");
let express = require('express');
let router = express.Router();
const { loginRequired } = require("../auth/helpers");


router.get("/logout", loginRequired, db.logoutCustomer);
router.get("/all_vehicles", loginRequired, db.getAllVehicles);

router.post("/register", db.registerCustomer); 
router.post("/login", db.loginCustomer);
router.post("/new_vehicle", loginRequired, db.postVehicleInfo);
module.exports = router;
