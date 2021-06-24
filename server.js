require("dotenv").config()

const express = require("express")
const app = express()
const mongoose = require("mongoose")


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// mongoose.set("useCreateIndex", true)
const db = mongoose.connection
db.on("error", function(err){
    console.log(err)
})
db.once("open", function(){
    console.log("Connection to mongoDB successful")
})

//authentication token
const permitted = process.env.TOKEN

//Authentication middleware
function authMiddleware(req, res, next){
    let headers = req.headers
    if(headers.permission){
        let permission = headers.permission
        if(permission == permitted){
            next()
        }
        else{
            res.status(403).send("You are forbidden")
        }
    }
    else{
        res.status(401).send("You do not have permission")
    }

}

app.get("/", function(req, res){
    res.send("Welcome to the kalpas-API, please refer to the documentation in github repo found in this link : https://github.com/Infamia2334/kalpas-csv-scanner-app, to interact and test the APIs")
})

//CSV_Scanner API
const scannerRouter = require("./routes/scanners")
app.use("/scanner", authMiddleware, scannerRouter)

//CRUD_API
const crudRouter = require("./routes/cruders")
app.use("/cruder", authMiddleware, crudRouter)

// LISTENING PORT
let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
 

app.listen(port, function(){
    console.log("Server started on Successfully")
})
