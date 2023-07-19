const express = require("express");
const mongoose = require("mongoose")

const app = express();
app.use(express.json());
// router imports
const userRoutes= require("./routes/user.routes");

app.use("/user",userRoutes);


mongoose.connect("mongodb+srv://spksystems003:STd1fnXws6kR29Qa@cluster0.pcuzenf.mongodb.net/rock?retryWrites=true&w=majority").then(()=>{
    app.listen(8080,()=>{
        console.log("server created at port 8080 db also connected")
    });
})

// mongoose.connect("mongodb+srv://spksystems003:<password>@cluster0.pcuzenf.mongodb.net/?retryWrites=true&w=majority")

