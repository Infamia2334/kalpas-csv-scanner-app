require("dotenv").config()

const express = require("express")
const app = express()
const mongoose = require("mongoose")



// mongoose.set("useCreateIndex", true)
const db = mongoose.connection
db.on("error", function(err){
    console.log(err)
})
db.once("open", function(){
    console.log("Connection to mongoDB successful")
})

const scannerRouter = require("./routes/scanners")
app.use("/scanner", scannerRouter)


app.listen(3000, function(){
    console.log("Server started at port 3000")
})