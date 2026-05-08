const express = require("express");
const Instructors = require("../models/Instructor");
const Students = require("../models/Student");
const Courses = require("../models/Courses");
const router = express.Router();

router.get("/counts", async(req, res) =>{
    try{
        const studentCount = await Students.countDocuments();
        const instructorCount = await Instructors.countDocuments();
        const courseCount = await Courses.countDocuments();

        res.json({
            students: studentCount,
            instructors: instructorCount,
            courses: courseCount
        });
    }catch(err){
        res.status(500).json({error: "Server error"});

    }
});

module.exports = router;
