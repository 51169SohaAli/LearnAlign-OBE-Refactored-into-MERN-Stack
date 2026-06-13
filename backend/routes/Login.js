const express = require ("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const Student = require("../models/Student");
const Instructor = require("../models/Instructor");

router.post("/student", async (req, res) => {
  const { student_id, password } = req.body;

  console.log("STUDENT LOGIN BODY:", req.body);

  const user = await Student.findOne({ student_id});

  if (!user) {
    return res.status(400).json({ message: "Invalid student login" });
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if(!isMatch){
    return res.status(400).json({message: "Invalid student login."});
  }

    return res.json({
  message: "Student Login successful",
  role: "student",
  id: user.student_id,
  name: user.name
});
});

router.post("/instructor", async (req, res) => {
  const { instructor_id, password } = req.body;

  console.log("BODY:", req.body);

  const user = await Instructor.findOne({ instructor_id });

  if (!user) {
    return res.status(400).json({ message: "Invalid instructor login" });
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.status(400).json({ message: "Invalid instructor login." });
  }

  return res.json({
    message: "Login successful",
    role: user.instructor_id === "f1517" ? "obe" : "instructor",
    id: user.instructor_id,
    name: user.name
  });
});

module.exports = router;