const express = require("express");
const CLO = require("../models/Clo");

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

router.put("/weightages", async (req, res) =>{
  try{
    const {clos} = req.body;

    for (const clo of clos){
      await CLO.findByIdAndUpdate(
        clo._id,
        {
          weightage: Number(clo.weightage)
        }
      );
    }
    res.json({
      message: "Weightages updated successfully"
    });
  }catch(error){
    res.status(500).json({
      message: error.message
    });
  }
});

module.exports = router;