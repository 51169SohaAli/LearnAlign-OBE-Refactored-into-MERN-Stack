const mongoose = require("mongoose");

const cloSchema = new mongoose.Schema({

  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },

  code: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  weightage: {
    type: Number,
    default: 0
  },

  ploIds: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "PLO",
    },
  ],

  isActive: {
    type: Boolean,
    default: true,
  },

});

module.exports = mongoose.model("CLO", cloSchema);