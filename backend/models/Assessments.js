const mongoose = require("mongoose");

const assessmentSchema = new mongoose.Schema(
    {
        courseId: {
            type: mongoose.Schema.Types.ObjectId,
            ref:"Course",
            required: true,

        },

        assessmentName: {
      type: String,
      required: true,
      trim: true,
    },

        assessmentType: {
            type: String,
            required: true,
            enum: ["Quiz", "Assignment", "Project", "Lab","Midterm", "Final"]
        },

        weightage: {
            type: Number,
            required: true,
            trim: true,
            min: 0,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Assessment", assessmentSchema);