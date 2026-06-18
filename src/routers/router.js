import express from "express";

import {createStudent ,
        getAllStudents,
        getStudentById,
        updateStudent,
        deleteStudent,
}
from "../controllers/controllers.js";

const router = express.Router();

router.route("/").get(getAllStudents).post(createStudent);
router.route("/:id").get(getStudentById)
.put(updateStudent)
.delete(deleteStudent);

export default router;