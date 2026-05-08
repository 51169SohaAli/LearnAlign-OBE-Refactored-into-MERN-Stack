const mongoose = require("mongoose");

const enrollmentSchema = new mongoose.Schema({
  student_id: String,
  course_code: String,
  semester_id: String
});

module.exports = mongoose.model("Enrollment", enrollmentSchema);