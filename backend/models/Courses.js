const mongoose = require ("mongoose");

const courseSchema = new mongoose.Schema({
    course_code: String,
    course_name: String,
    description: String,
    credit_hours: Number
}, {collection: "Courses"});

module.exports = mongoose.model("Course", courseSchema);
