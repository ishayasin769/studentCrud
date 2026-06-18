import mongoose, { Schema } from "mongoose";



const studentSchema = new mongoose.Schema(
    {
        name : {
            type: String,
            required : true,
            trim : true

        },
        email: {
            type: String,
            required : true,
            unique : true,
        },
        age : {
            type : Number,
            required: true,
            min : 1,
        },
        course : {
            type : String,
            required : true,
        },
    },
  {
    timestamps : true,
  }
);

const Student = mongoose.model(
    "Student",
    studentSchema
);

export default Student;