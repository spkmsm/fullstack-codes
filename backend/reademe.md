const result=require("./helper");


console.log(result)
console.log(result.value)
console.log(result.display())



// 1. M V C => Model View Controller
// 2. C R U D => Create Read Update Delete
// "" => post  get  put  delete
<!--  {body}, {params , query} -->
<!-- {post , put, delete} ,{get} -->


<!-- 




app.get("/about/:id",(req,res)=>{
    console.log(req)
    res.send("take it")
    console.log("trigered")
})

app.post("/createUser",(req,res)=>{
    console.log(req.body)
    res.send("post method");
})


app.put("/updateUser",(req,res)=>{
    console.log(req.body)
    res.send("put method");
})



app.delete("/deleteUser",(req,res)=>{
    console.log(req.body)
    res.send("delete method");
})

 -->