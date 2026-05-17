const express = require("express");
const router = express.Router();
const Semesters = require("../models/Semesters");

router.post("/", async (req, res) =>{
    try{
        const {name} =req.body;
        
        const semester = await Semesters.create({
            name
        });

        res.status(201).json({
            message: "Semester created successfully",
            semester
        });
    } catch (error){
        res.status(500).json({
            message: "Error creating semester",
            error: error.message
        });

    }
});

router.get("/current", async (req, res) => {
  try {
    const semester = await Semesters.findOne().sort({ _id: -1 });

    if (!semester) {
      return res.json({ semester: null });
    }

    res.json({
      semester: semester.name
    });

  } catch (error) {
    res.status(500).json({
      semester: null,
      message: error.message
    });
  }
});

module.exports = router;