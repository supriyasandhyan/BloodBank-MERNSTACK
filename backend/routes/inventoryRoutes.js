const express = require ("express");
const authMiddelware = require("../middlewares/authMiddelware");
const { createInventoryController, getInventoryController } = require("../controller/inventoryController");

const router = express.Router();

//INVENTORY ROUTE 

//Add inventory
router.post('/create-inventory' , authMiddelware , createInventoryController )

//Get inventory records
router.get('/get-inventory', authMiddelware , getInventoryController)


module.exports = router

