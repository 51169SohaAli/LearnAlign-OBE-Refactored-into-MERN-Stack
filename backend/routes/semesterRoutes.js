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

module.exports = router;