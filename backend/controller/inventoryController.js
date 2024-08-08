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

module.exports = { createInventoryController };
