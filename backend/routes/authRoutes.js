const express = require ("express");
const { registerController, loginController, currentUserController } = require("../controller/authController");
const authMiddelware = require("../middlewares/authMiddelware");

const router = express.Router();

//REGISTER ROUTE 
router.post('/register', registerController );

//LOGIN ROUTE
router.post('/login', loginController);

//current user route
router.get('/current-user', authMiddelware, currentUserController)


module.exports = router

