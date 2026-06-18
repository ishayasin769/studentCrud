import Student from '../model/student.model.js';


export const createStudent = async (req, res) => {
    try {
        const { name, email, age, course } = req.body;

        const existingStudent = await Student.findOne({ email });

        if (existingStudent) {
            return res.status(400).json({
                success: false,
                message: "Email already exists",
            });
        }

        const student = await Student.create({
            name,
            email,
            age,
            course,
        });

        res.status(201).json({
            success: true,
            data: student,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};


export const getAllStudents = async (req,res)=>{
    try{
        const {
            search,
            course,
            sort,
            page=1,
            limit = 5,
        } = req.query;
        const query = {};
        if(search){
            query.name = {
                $regex: search,
                $options: "i",
            };
        }
        if(course){
            query.course = course;
        }
        let sortOption = {};
        if (sort === "name") {
            sortOption.name = 1;
        }

        if (sort === "age") {
            sortOption.age = 1;
        }
        const skip = (page -1)* limit;
        const students = await Student.find(query)
        .sort(sortOption)
        .skip(skip)
        .limit(Number(limit));

        const totalRecords =
            await Student.countDocuments(query);

        res.status(200).json({
            success: true,
            totalRecords,
            currentPage: Number(page),
            totalPages: Math.ceil(
                totalRecords / limit
            ),
            data: students,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export const getStudentById = async (
    req,
    res
) => {
    try {
        const student = await Student.findById(
            req.params.id
        );

        if (!student) {
            return res.status(404).json({
                success: false,
                message: "Student not found",
            });
        }

        res.status(200).json({
            success: true,
            data: student,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
export const updateStudent = async (
    req,
    res
) => {
    try {
        const student =
            await Student.findByIdAndUpdate(
                req.params.id,
                req.body,
                {
                    new: true,
                    runValidators: true,
                }
               
            );

        if (!student) {
            return res.status(404).json({
                success: false,
                message: "Student not found",
            });
        }

        res.status(200).json({
            success: true,
            message : "Student Updated successfully",
            data: student,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export const deleteStudent = async (
    req,
    res
) => {
    try {
        const student =
            await Student.findByIdAndDelete(
                req.params.id
            );

        if (!student) {
            return res.status(404).json({
                success: false,
                message: "Student not found",
            });
        }

        res.status(200).json({
            success: true,
            message:
                "Student deleted successfully",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
