const express = require("express");
const CLO = require("../models/CLO");

const router = express.Router();

router.get("/course/:courseId", async (req, res) => {
  try {

    const clos = await CLO.find({
      courseId: req.params.courseId
    });

    res.json(clos);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
});

module.exports = router;