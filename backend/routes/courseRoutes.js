const express = require("express");
const Course = require("../models/Courses");
const CourseOffering = require("../models/CourseOffering");

const router = express.Router();

router.get("/", async (req, res) => {

    try {

        const courses = await Course.find();

        res.json(courses);

    } catch (error) {

        res.status(500).json({ message: error.message });

    }

});

router.get("/instructor/:instructor_id", async (req, res) => {

    try {


        const assignedCourses = await CourseOffering.find({
            instructor_id: req.params.instructor_id
        });

       
        const courseCodes = assignedCourses.map(
            (course) => course.course_code
        );

        const courses = await Course.find({
            course_code: { $in: courseCodes }
        });

        
        res.json(courses);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});

module.exports = router;