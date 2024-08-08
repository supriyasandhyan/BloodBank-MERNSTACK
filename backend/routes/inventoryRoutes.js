const express = require ("express");
const authMiddelware = require("../middlewares/authMiddelware");
const { createInventoryController } = require("../controller/inventoryController");

const router = express.Router();

//INVENTORY ROUTE 
//Add inventory
router.post('/create-inventory' , authMiddelware , createInventoryController )


module.exports = router

