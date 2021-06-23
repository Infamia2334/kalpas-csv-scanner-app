const express = require('express')
const multer = require("multer")
const router = express.Router()
const csv = require("csvtojson")


//getting csv files
router.get("/", function(req,res){
    res.send("Hello world")
})

var storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null, "uploads/")
    },
    filename: function(req, file, cb){
        cb(null, Date.now() +file.originalname)
    }
})

var upload = multer({storage: storage})

//Creating csv files, getting it from user
router.post("/",upload.single("filename"),  function(req,res){
    var flieInfo = req.file
    res.send(flieInfo)
    csv().fromFile(req.file.path)
    .then(function(jsonObj){
        console.log(jsonObj)
    })
})




module.exports = router