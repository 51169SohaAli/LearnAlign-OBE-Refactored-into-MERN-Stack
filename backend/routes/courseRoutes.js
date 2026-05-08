const express = require("express");
const Course = require("../models/Courses");

const router = express.Router();

router.get("/", async (req, res) => {

    try {

        const courses = await Course.find();

        res.json(courses);

    } catch (error) {

        res.status(500).json({ message: error.message });

    }

});

module.exports = router;