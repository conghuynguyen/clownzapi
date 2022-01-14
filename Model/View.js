const mongoose = require("mongoose");
const ViewSchema = mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  aaa: { type: Number, required: true },
});

module.exports = mongoose.model("View", ViewSchema);
