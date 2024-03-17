const mongoose = require("mongoose");

//create schema
const studentSchema = new mongoose.Schema(
    {
        studentName: String,
        email: String,
        eno: String,
        branch: String,
        yearOfStudy: String,
        contactNo: String,
        address: String,
        dateOfBirth: String,
        gender: String,
        bloodGroup: String,
        photo: String,
        signature: String,
        courses: [{
            name: String
        }],
        attendance: String,
        SGPA: [{
            semester: String
        }],
        backLogs: String,
        midTermMarks: [String],
        projects: [String],
        skills: [String],
        achievements: [String],
        hobbies: [String],
        languages: [String],
        behaviourAnalytics: [String],
        studentScore: String,
        LinkedIn: String,
        Github: String,
        Portfolio: String
    });
    
 

//Compile schema into model
const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
