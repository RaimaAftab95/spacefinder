const Space = require("../models/space");

// @desc    Create a new space
// @route   POST /api/spaces
// @access  Private
exports.createSpace = async (req, res) => {
  try {
    console.log("Request Body:", req.body);
    const { title, description, location, price, amenities } = req.body;

    //Map the uploaded files into array of { url, type }
    const images = req.files.map((file) => ({
      url: file.path, // Multer + Cloudinary gives 'path' for the uploaded image URL
      type: file.mimetype, // Mime type e.g., image/jpeg, image/png
    }));

    // Ensure createdBy is set from req.user._id
    const space = new Space({
      title,
      description,
      location: JSON.parse(location), // location sent from frontend as stringified JSON
      amenities: amenities ? JSON.parse(amenities) : [], // same for amenities (optional)
      price,
      images,
      // createdBy: req.user, // req.user comes from authMiddleware
      createdBy: req.user.id,
    });

    await space.save();

    res.status(201).json({ message: "Space created successfully", space });
  } catch (error) {
    console.error("Create Space Error:", error.message);
    res.status(500).json({ message: error.message || "Server Error" });
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
