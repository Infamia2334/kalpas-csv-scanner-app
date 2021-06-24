const express = require('express')
const multer = require("multer")
const router = express.Router()
const csv = require("csvtojson")
const mongoose = require('mongoose')


mongoose.connect("mongodb+srv://admin-dipan:Test123@appcluster.x7nob.mongodb.net/kalpasCSVdb?retryWrites=true&w=majority",  {useNewUrlParser : true, useUnifiedTopology: true})
// mongoose.connect("mongodb://localhost:27017/kalpasCSVdb",  {useNewUrlParser : true, useUnifiedTopology: true})
// const financialSchema = new mongoose.Schema({
//     year: String,
//     industry_code_ANZSIC: String,
//     industry_name_ANZSIC: String,
//     rme_size_grp: String,
//     variable: String,
//     value: String,
//     unit: String
// })

// const BioStats =  mongoose.model("BioStats", financialSchema)

const BioStats = require("../models/bioStats")
//getting csv files
router.get("/", function(req,res){
    res.send("Welcome to the scanner API")
})

var storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null, "uploads/")
    },
    filename: function(req, file, cb){
        cb(null, Date.now() + file.originalname)
    }
})

var upload = multer({storage: storage})

//Creating csv files, getting it from user
router.post("/",upload.single("filename"),  function(req,res){
    var flieInfo = req.file
    res.send(flieInfo)
     console.log(req.file)
    csv().fromFile(req.file.path)
    .then(function(jsonObj){
        console.log(jsonObj)
        BioStats.insertMany(jsonObj)
    })

   
})




module.exports = router