const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // For parsing JSON request bodies

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/spaces", require("./routes/spaceRoutes"));

// Base route for testing server connection
app.get("/", (req, res) => {
  res.send("Welcome to the SpaceFinder API 🚀");
});

// Start server and listen on a specific port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
