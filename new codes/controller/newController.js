const Student = require("../model/student.models");

const getAllStudent = async (req, res) => {
  try {
    const check = await Student.find({ name: req.params.name });
    if (check.length === 0) {
      return res.status(500).send("invalid user details");
    } else {
      if (check[0].contact === Number(req.params.contact)) {
        return res.status(200).send("Start your journey");
      } else {
        return res.status(500).send("invalid password");
      }
    }
  } catch (err) {
    return res.status(500).send("something went wrong");
  }
};

const createStudent = async (req, res) => {
  const student = Student(req.body);

  await student.save();

  return res.send("createStudent");
};

const updateStudent = async (req, res) => {
  await Student.findByIdAndUpdate({ _id: req.body.id }, req.body);

  return res.send("updateStudent");
};

const deleteStudent = async (req, res) => {
  console.log(req.body);
  await Student.findByIdAndDelete({ _id: req.body.id });

  return res.send("deleteStudent");
};

module.exports = {
  getAllStudent,
  createStudent,
  updateStudent,
  deleteStudent,
};
