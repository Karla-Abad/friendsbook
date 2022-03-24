const mongoose = require('mongoose')
const dbName = "friendsbookdb"

mongoose.connect(`mongodb://localhost/${dbName}`,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=> console.log(`Connected to the ${dbName} database!`))
.catch(err=>console.log("Looks like we made a wrong turn somehwere?", err))