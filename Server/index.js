const express = require("express");
const app = express();
const port = 8000;
const items = require("../src/Birds.json")
const item1 = require("../src/Animals.json")
const item2 = require("../src/Fish.json");
const item3 = require("../src/Food.json");
const fs = require("fs")
const poth = require("path")
const mongoose = require("mongoose")

app.use(express.json())

const cors = require("cors");
const path = require("path");
const EmployeeModel = require("./employee");

app.use(
  cors({
    origin: ["http://localhost:3000","http://localhost:8000","http://localhost:3001"],
    methods:["GET","POST","PATCH","DELETE"],
  })
);

mongoose.connect("mongodb://localhost:27017/employee");

app.post("/login", (req, res) => {
const {email,pass}=req.body;
console.log(pass);
 EmployeeModel.findOne({email:email})
 .then(user => {
  if(user){
    if(user.pass === pass){
    res.json("Success")
  }else{
    res.json("The Password is Incorrect")
  }
 }else{
    res.json("No record existed")
  }
})

});

app.post("/register",(req,res)=>{
  EmployeeModel.create(req.body)
  .then(emp => res.json(emp) )
  .catch(err => res.json(err))
})

app.get("/bird", (req, res) => {
  return res.json(items);
});

app.get("/animal", (req, res) => {
  return res.json(item1);
});

app.get("/fish", (req, res) => {
  return res.json(item2);
});

app.get("/food", (req, res) => {
  return res.json(item3);
});



// birds

app.post("/bird", (req,res)=>{
    let {img,name,weight,length,amt,dis} = req.body;
if (!img || !name || !weight || !length || !amt || !dis){
    res.status(400).send({message : "All fields Required"})  
}
let id= Date.now();
items.push({id, img, name, weight, length, amt, dis });
fs.writeFile("../src/Birds.json",JSON.stringify(items),(err,data)=>{
    return res.json({message : "User Details ADD"})  
});
})

// Animals

app.post("/animal",(req,res)=>{
let {img,name,amt,dis}=req.body;
if(!img || !name || !amt || !dis){
  res.status(400).send({message:"All Fields Required"})
}
let id = Date.now();
item1.push({id, img, name, amt, dis });
fs.writeFile("../src/Animals.json",JSON.stringify(item1),(err,data)=>{
  return res.json({message:"User Deails Add"})
})

})

//Fish

app.post("/fish", (req, res) => {
  let { img, name, amt, dis } = req.body;
  if (!img || !name || !amt || !dis) {
    res.status(400).send({ message: "All Fields Required" });
  }
  let id = Date.now();
  item2.push({ id, img, name, amt, dis });
  fs.writeFile("../src/Fish.json", JSON.stringify(item2), (err, data) => {
    return res.json({ message: "User Deails Add" });
  });
});

//Food

app.post("/food", (req, res) => {
  let { img, name, amt, dis } = req.body;
  if (!img || !name || !amt || !dis) {
    res.status(400).send({ message: "All Fields Required" });
  }
  let id = Date.now();
  item3.push({ id, img, name, amt, dis });
  fs.writeFile("../src/Food.json", JSON.stringify(item3), (err, data) => {
    return res.json({ message: "User Deails Add" });
  });
});


//Bird Delete

app.delete("/bird/:id",(req,res)=>{
  let id = Number(req.params.id);
  let filterUser = items.filter((user)=> user.id !== id);
  fs.writeFile("../src/Birds.json",JSON.stringify(filterUser),(err,data)=>{
   return res.json(filterUser)
})
})

//Animal Delete

app.delete("/animal/:id",(req,res)=>{
  let id = Number(req.params.id);
  let filterUser = item1.filter((user)=> user.id !== id);
  fs.writeFile("../src/Animals.json",JSON.stringify(filterUser),(err,data)=>{
   return res.json(filterUser)
})
})

//Fish Delete

app.delete("/fish/:id",(req,res)=>{
  let id = Number(req.params.id);
  let filterUser = item2.filter((user)=> user.id !== id);
  fs.writeFile("../src/Fish.json",JSON.stringify(filterUser),(err,data)=>{
   return res.json(filterUser)
})
})

//Food Delete

app.delete("/food/:id",(req,res)=>{
  let id = Number(req.params.id);
  let filterUser = item3.filter((user)=> user.id !== id);
  fs.writeFile("../src/Food.json",JSON.stringify(filterUser),(err,data)=>{
   return res.json(filterUser)
})
})
app.get("/items", (req, res) => {
  return res.json([...items, ...item1, ...item2, ...item3]);
});
app.listen(port, (err) => {
    console.log(`App Is Running ${port}`);
  });

  console.log("welcome")