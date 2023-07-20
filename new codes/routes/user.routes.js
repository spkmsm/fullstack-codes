const router= require("express").Router();

// import controllers
const {getAllUsers,createUsers}= require("../controller/user.controller")

router.get("/getAllUsers",getAllUsers);
router.post("/createUser",createUsers);

module.exports=router;