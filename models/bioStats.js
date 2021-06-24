const mongoose = require("mongoose")

const bioStatsSchema = new mongoose.Schema({
    Name: String,
    Sex: String,
    Age: String,
    Height: String,
    Weight: String

})

module.exports =  mongoose.model("BioStats", bioStatsSchema)