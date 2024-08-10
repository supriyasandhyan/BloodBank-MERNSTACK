const userModel = require("../models/userModel");
const inventoryModels = require("../models/inventoryModels");

const createInventoryController = async (req, res) => {
  try {
    const { email, inventoryType } = req.body;

    // Validation
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User not found",
      });
    }

    if (inventoryType === "in" && user.role !== "donar") {
      return res.status(403).send({
        success: false,
        message: "User is not authorized to add inventory",
      });
    }

    if (inventoryType === "out" && user.role !== "hospital") {
      return res.status(403).send({
        success: false,
        message: "User is not authorized to remove inventory",
      });
    }

    // Save record
    const inventory = new inventoryModels(req.body);
    await inventory.save();

    return res.status(201).send({
      success: true,
      message: "New inventory record added successfully",
    });
  } catch (error) {
    console.error("Error creating inventory:", error);
    return res.status(500).send({
      success: false,
      message: "Error in creating inventory",
      error: error.message,
    });
  }
};


const getInventoryController = async (req, res) => {
  try {
    const inventory = await inventoryModels
      .find({
        organisation: req.body.userId,
      })
      .populate("donar")
      .populate("hospital")
      .sort({ createdAt: -1 });

    return res.status(200).send({
      success: true,
      messaage: "get all records successfully",
      inventory,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error In Get All Inventory",
      error,
    });
  }
};

module.exports = { createInventoryController , getInventoryController };
