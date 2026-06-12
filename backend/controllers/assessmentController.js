const Assessment = require("../models/Assessments");

const createAssessment = async (req, res) =>
    {
        try{
            const {
                courseId,
                assessmentName,
                assessmentType,
                weightage,
            } = req.body;

            const assessment = await Assessment.create({
                courseId,
                assessmentName,
                assessmentType,
                weightage,
            });

            res.status(201).json(assessment);
        } catch(error) {
            console.log(error);

            res.status(500).json({
                message: error.message,
            });
        }

};

module.exports = {
    createAssessment,
};