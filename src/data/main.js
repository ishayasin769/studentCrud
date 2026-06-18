const student = await Student.create(
    {
        name,
        email,
        age,
        course
    }
)

export default student;