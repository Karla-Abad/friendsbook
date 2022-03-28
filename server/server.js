require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:3000" }));

app.use(cookieParser());

// Config

require('./Config/mongoose.config')

// routes
require("./Routes/user.routes")(app)
require("./Routes/post.routes")(app)


app.listen(process.env.MY_PORT, ()=> console.log(`You are connected to port ${process.env.MY_PORT}!`))



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
