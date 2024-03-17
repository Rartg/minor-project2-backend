const Student = require("../models/StudentModel");

exports.getStudents = async (req, res) => {
    try {
        const {id} = req.params;
        const student = await Student.find({
            eno:id
        });
        return res.status(200).json({
            student,
            message: "Student Fetched Successfully"
        })
    } catch (error) {
        return res.status(500).json({
            message: error
        })
    }
}

exports.addStudent = async (req, res) => {
    try {
        const { studentName,eno,email,branch,yearOfStudy,contactNo,address,dateOfBirth,gender, bloodGroup,photo,signature ,courses, attendan, SGPA, backLogs, midTermMarks,projects,skills,achievements,hobbies,languages,behaviourAnalytics,studentScore,LinkedIn,Github,Portfolio} = req.body;
        Student.create({
            studentName,
            email,
            eno,
            branch,
            yearOfStudy,
            contactNo,
            address,
            dateOfBirth,
            gender,
            bloodGroup,
            photo,
            signature,
            courses,
            attendance,
            SGPA,
            backLogs,
            midTermMarks,
            projects,
            skills,
            achievements,
            hobbies,
            languages,
            behaviourAnalytics,
            studentScore,
            LinkedIn,
            Github,
            Portfolio
        }).then((studentCreated) => {
            return res.status(200).json({
                studentCreated
            })
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: error
        
        })
    }
}