const mongoose = require ("mongoose");

const instructorSchema = new mongoose.Schema({
    instructor_id: String,
    name: String,
    password: String
},{collection: "Instructors"});

module.exports = mongoose.model("Instructor", instructorSchema);