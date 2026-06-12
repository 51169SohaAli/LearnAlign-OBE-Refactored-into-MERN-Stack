const express = require("express");
const Course = require("../models/Courses");
const CLO = require("../models/Clo");
/*const Assessment = require("../models/Assessment");*/
const Enrollment = require("../models/Enrollment");
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

router.get("/code/:courseCode", async (req, res) => {
  try {

    const course = await Course.findOne({
      course_code: req.params.courseCode
    });

    if (!course) {
      return res.status(404).json({
        message: "Course not found"
      });
    }

    res.json(course);

  } catch(error) {

    res.status(500).json({
      message: error.message
    });

  }
});

router.get("/:courseCode", async (req, res) => {

  try {

    const courseCode = req.params.courseCode;

    const course = await Course.findOne({
      course_code: courseCode
    });

    if (!course) {
      return res.status(404).json({
        message: "Course not found"
      });
    }

    const cloCount = await CLO.countDocuments({
      courseId: course._id
    });

   /* const assessmentCount = await Assessment.countDocuments({
      course_code: courseCode
    }); */

    const studentCount = await Enrollment.countDocuments({
      course_code: courseCode
    });

    res.json({
      course_code: course.course_code,
      course_name: course.course_name,
      cloCount,
      /*assessmentCount,*/
      studentCount
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

});



module.exports = router;