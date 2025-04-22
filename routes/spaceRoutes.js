const express = require("express");
const router = express.Router();
const { createSpace, getSpaces } = require("../controllers/spaceController");
const authMiddleware = require("../middleware/authMiddleware");

// Public route to get all spaces
router.get("/", getSpaces);

// Protected route to create a new space
router.post("/", authMiddleware, createSpace);

module.exports = router;
