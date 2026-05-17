const mongoose = require ("mongoose");

const studentSchema = new mongoose.Schema({
    student_id: String,
    name: String,
    password: String
}, {collection: "Students"});

module.exports = mongoose.model("Student", studentSchema);