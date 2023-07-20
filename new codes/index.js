const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());

// get post put delete
//  r   c    u   d
// 200 404 500 502

const newRoutes = require("./routes/newroutes");

app.use("/student", newRoutes);

mongoose
  .connect(
    "mongodb+srv://spksystems003:4joQyfoAOd09ZEk6@cluster0.pcuzenf.mongodb.net/rock?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(8080, () => {
      console.log("server created at port 8080");
    });
  });
