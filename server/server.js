require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
const multer = require("multer") // added  - for more info --> https://www.npmjs.com/package/multer
const path = require("path")

// indicates to use directory
app.use("/images", express.static(path.join(__dirname, "public/images")))

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:3000" }));

app.use(cookieParser());

const storage = multer.diskStorage({
    destination: (req, file, cb) => {    // cd stand for callback
        cb(null, "public/images")
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})
// filename 
    // A function that determines the name of the uploaded file. If nothing is passed, 
    // Multer will generate a 32 character pseudorandom hex string with no extension.

// takes 3 param
    // req — The Express Request object.
    // file — Object containing information about the processed file.
    // callback — Callback to determine the name of the uploaded file.

// null is for the error, destination

const upload = multer({storage});


// upload.single
// Returns middleware that processes a single file associated with the given form field.
// The Request object will be populated with a file object containing information about the processed file.
// @param fieldName — Name of the multipart form field to process.

// "file" <-- field name: string
// Name of the multipart form field to process.
// Returns middleware that processes a single file associated with the given form field.
// The Request object will be populated with a file object containing information about the processed file.

app.post("/api/upload", upload.single("file"), (req, res) =>{
    try {
        res.json("File uploaded")
    }
    catch (err) {
        console.log("Error uploading filel", err)
    }
})


// Config

require('./Config/mongoose.config')

// routes
require("./Routes/user.routes")(app)
require("./Routes/post.routes")(app)


app.listen(process.env.MY_PORT, () => console.log(`You are connected to port ${process.env.MY_PORT}!`))



// require('dotenv').config()
// const express = require('express')
// const cors = require('cors')
// const app = express()

// app.use(express.json())
// app.use(express.urlencoded({extended: true}))
// app.use(cors({origin:"http://localhost:3000"}))

// // Config
// require('./Config/mongoose.config')

// // User Routes
// require("./Routes/user.routes")(app)

// app.listen(process.env.MY_PORT, ()=>console.log(`We have successfully landed on port ${process.env.MY_PORT}!`))
