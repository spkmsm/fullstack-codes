const router = require("express").Router();

// controller imports

const {createStudent,updateStudent,getAllStudent,deleteStudent} = require("../controller/newController");

router.get("/:name/:contact",getAllStudent);
router.post("/createStudent",createStudent);
router.put("/updateStudent",updateStudent)
router.delete("/deleteStudent",deleteStudent);



module.exports= router;