const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware"); // Import the middleware for protection

// @route   GET /api/protectedRoute
// @desc    Example of a protected route
router.get("/protectedRoute", authMiddleware, (req, res) => {
  res.status(200).json({
    message: "This is a protected route",
    userId: req.user, // Access the user ID from the decoded token
  });
});

module.exports = router;
