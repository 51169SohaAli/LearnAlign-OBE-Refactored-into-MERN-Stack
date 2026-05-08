const mongoose = require ("mongoose");

const instructorSchema = new mongoose.Schema({
    instructor_id: String,
    password: String
},{collection: "Instructors"});

module.exports = mongoose.model("Instructor", instructorSchema);