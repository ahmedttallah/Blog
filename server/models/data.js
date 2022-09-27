const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema(
  {
    text: String,
    comments: [
      {
        text: String,
      },
    ],
  },
  { timestamps: true }
);

const Data = mongoose.model("Data", dataSchema);
module.exports = Data;
