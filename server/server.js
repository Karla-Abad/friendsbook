const express = require('express')
const app = express()
const cors = require('cors')
const port = 8000

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors({origin:"http://localhost:3000"}))


app.listen(port, ()=>(console.log(`We have successfully landed on port ${port}!`)))