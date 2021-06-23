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

// const crudRouter = require("./routes/cruders")
// app.use("/cruder", crudRouter)

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
 

app.listen(port, function(){
    console.log("Server started on Successfully")
})
