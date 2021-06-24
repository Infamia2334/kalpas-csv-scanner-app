const express = require("express")
const mongoose = require('mongoose')
const router = express.Router()


mongoose.connect("mongodb+srv://admin-dipan:Test123@appcluster.x7nob.mongodb.net/kalpasCSVdb?retryWrites=true&w=majority",  {useNewUrlParser : true, useUnifiedTopology: true})
const BioStats = require("../models/bioStats")


//GET ALL DATA IN COLLECTION
router.get("/", function(req,res){
    BioStats.find( function(err, found){
        if(!err){
            res.send(found)
        }
    })
})

router.get("/getOne", function(req, res){
    BioStats.findOne({Name: req.query.name}, function(err, found){
        if(!err){
            res.send(found)
        }
        else{
            res.send(err)
        }
    })
})

router.post("/", function(req, res){
    
    const newBioStats = new BioStats({
        Name: req.body.name,
        Sex: req.body.sex,
        Age: req.body.age,
        Height:req.body.height,
        Weight: req.body.weight
    })

    newBioStats.save(function(err){
        if(err){
            res.send(err)
        }
        else{
            res.send("New Biostats Created and Saved")
        }
    })
})


//to delete everything in collection
router.delete("/deleteAll", function(req, res){
    BioStats.deleteMany(function(err){
        if(err){
            res.send(err)
        }
        else{
            res.send("Successfully deleted all Data in COLLECTION")
        }
    })
})

router.delete("/deleteOne", function(req, res){
    BioStats.deleteOne({Name: req.body.name} ,function(err){
        if(err){
            res.send(err)
        }
        else{
            res.send("Successfully deleted said data" )
        }
    })
})

router.put("/", function(req, res){
    var objForUpdate = {
        Name: req.body.name,
        Sex: req.body.sex,
        Age: req.body.age,
        Height:req.body.height,
        Weight: req.body.weight
    }

    BioStats.findOneAndUpdate({Name: req.query.name}, objForUpdate, function(err, docs){
        if(err){
            res.send(err)
        }
        else{
            res.send(docs + " and Updated")
        }
    })
})





module.exports = router