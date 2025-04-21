const mongoose = require("mongoose");

const spaceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: String,
    location: {
      address: String,
      city: String,
      country: String,
    },
    amenities: [String], // e.g., ['wifi', 'coffee', 'kitchen']
    price: {
      type: Number,
      required: true,
    },
    images: [String], // URLs of uploaded images
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Space", spaceSchema);
