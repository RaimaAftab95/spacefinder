// server.js
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

// Load env vars
dotenv.config();

// Connect to DB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // For JSON request bodies

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/spaces", require("./routes/spaceRoutes"));

// Base route
app.get("/", (req, res) => {
  res.send("Welcome to the SpaceFinder API 🚀");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
