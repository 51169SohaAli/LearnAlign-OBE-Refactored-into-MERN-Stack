const express = require("express");
const router = express.Router();
const multer = require("multer");
const XLSX = require("xlsx");
const CourseOffering = require("../models/CourseOffering");
const Enrollment = require("../models/Enrollment");
const upload = multer({dest: "uploads/"});

router.post("/courses", upload.single("file"), async (req, res) =>{
    try{
        console.log("File received:", req.file);
        console.log("Body received:", req.body);

        const workbook = XLSX.readFile(req.file.path);
        const sheetName = workbook.SheetNames[0];
        const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

        console.log("Parsed Excel Data: ", data);

        const formattedData = data.map(item => ({
          course_code: item.course_code,
          instructor_id: item.instructor_id,
          semester_id: req.body.semesterId
        }));

        console.log("Formatted Data:",formattedData);
        await CourseOffering.insertMany(formattedData);
        const fs = require("fs");
        fs.unlinkSync(req.file.path);

        res.json({
            message: "File processed succesfully",
            data: formattedData
        });
    }catch(error){
        console.log(error);
        res.status(500).json({
            message: "Error uploading course file",
            error: error.message
        });
    }
});

router.post("/enrollments", upload.single("file"), async (req, res) => {
  try {
    console.log("Enrollment file received:", req.file);
    console.log("Body received:", req.body);

    const workbook = XLSX.readFile(req.file.path);
    const sheetName = workbook.SheetNames[0];
    const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

    console.log("Parsed Enrollment Data:", data);

     const formattedData = data.map(item => ({
          student_id: item.student_id,
          course_code: item.course_code,
          semester_id: req.body.semesterId
        }));

        console.log("Formatted Data:",formattedData);
        await Enrollment.insertMany(formattedData);
        const fs = require("fs");
        fs.unlinkSync(req.file.path);

        res.json({
            message: "File processed succesfully",
            data: formattedData
        })

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error uploading enrollment file",
      error: error.message
    });
  }
});

module.exports = router;