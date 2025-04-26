const mongoose = require("mongoose");

const spaceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: String,
    location: {
      address: {
        type: String,
        required: true, // Ensures address is required
      },
      city: {
        type: String,
        required: true, // Ensures city is required
      },
      country: {
        type: String,
        required: true, // Ensures country is required
      },
    },
    amenities: [String], // e.g., ['wifi', 'coffee', 'kitchen']
    price: {
      type: Number,
      required: true,
    },
    images: [
      {
        url: String,
        type: String,
      },
    ], // URLs of uploaded images
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Space", spaceSchema);
