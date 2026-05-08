const mongoose = require("mongoose");

const courseOfferingSchema = new mongoose.Schema({
  course_code: String,
  instructor_id: String,
  semester_id: String
});

module.exports = mongoose.model("CourseOffering", courseOfferingSchema);