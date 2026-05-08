const express = require ("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const Student = require("../models/Student");
const Instructor = require("../models/Instructor");

router.post("/student", async (req, res) => {
  const { student_id, password } = req.body;

  const user = await Student.findOne({ student_id});

  if (!user) {
    return res.status(400).json({ message: "Invalid student login" });
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if(!isMatch){
    return res.status(400).json({message: "Invalid student login."});
  }

    req.session.user ={
      id: user.student_id,
      role:"student"
    };

    res.json({ 
      message: "Student login successful",
      role: "student",
      id: user.student_id  
    });
});

router.post("/instructor", async (req, res) => {
  const { instructor_id, password } = req.body;

  const user = await Instructor.findOne({ instructor_id});

  if (!user) {
    return res.status(400).json({ message: "Invalid instructor login" });
  }

   const isMatch = await bcrypt.compare(password, user.password);

  if(!isMatch){
    return res.status(400).json({message: "Invalid instructor login."});
  }

  req.session.user ={
      id: user.instructor_id,
      role: user.instructor_id === "f1517" ? "obe" : "instructor"
    };

    res.json({ 
      message: "Instructor login successful",
      role: req.session.user.role,
      id: user.instructor_id 
    });
});

module.exports = router;