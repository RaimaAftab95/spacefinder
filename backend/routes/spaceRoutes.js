const express = require("express");
const router = express.Router();
const { createSpace, getSpaces } = require("../controllers/spaceController");
const authMiddleware = require("../middleware/authMiddleware");
const upload = require("../config/multer");

// Public route to get all spaces
router.get("/", getSpaces);

// Protected route to create a new space
// 🆕 Add `upload.array("images", 5)` before createSpace
// It means allow up to 5 images from the frontend form
router.post("/", authMiddleware, upload.array("images", 5), createSpace);

module.exports = router;
