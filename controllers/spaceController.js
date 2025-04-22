const Space = require("../models/space");

// @desc    Create a new space
// @route   POST /api/spaces
// @access  Private
exports.createSpace = async (req, res) => {
  try {
    const { title, description, location, price } = req.body;

    const space = new Space({
      title,
      description,
      location,
      price,
      createdBy: req.user, // req.user comes from authMiddleware
    });

    await space.save();

    res.status(201).json({ message: "Space created successfully", space });
  } catch (error) {
    console.error("Create Space Error:", error.message);
    res.status(500).json({ message: "Server Error" });
  }
};

// @desc    Get all spaces
// @route   GET /api/spaces
// @access  Public
exports.getSpaces = async (req, res) => {
  try {
    const spaces = await Space.find().populate("createdBy", "name email");
    res.status(200).json(spaces);
  } catch (error) {
    console.error("Get Spaces Error:", error.message);
    res.status(500).json({ message: "Server Error" });
  }
};
