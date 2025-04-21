// routes/authRoutes.js
const express = require("express");
const router = express.Router();

// Sample route to test
router.get("/", (req, res) => {
  res.send("Auth route is working");
});

module.exports = router;
