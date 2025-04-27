const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", ""); // Get token from Authorization header
  console.log("JWT_SECRET:", process.env.JWT_SECRET);

  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify the token
    req.user = decoded; // Attaching the decoded user data to the request
    console.log("Request Body:", req.body);

    console.log("Decoded user ID:", decoded.id); // Log the decoded user ID
    // req.user = decoded.id; // Store user ID in request object for later use
    console.log("Decoded user:", req.user); // Log the user to verify it's correctly attached
    next(); // Call the next middleware/route handler
  } catch (err) {
    res.status(400).json({ message: "Token is not valid" });
  }
};

module.exports = authMiddleware;
