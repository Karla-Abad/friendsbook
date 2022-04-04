const mongoose = require("mongoose")

mongoose.connect(`mongodb://127.0.0.1/friendsBookDB`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log(`You have landed on the friendsBookDB database!`)
    })
    .catch((err) => {
        console.log(`We made a wrong turn trying to get to the friendsBookDB database!`)
    })











// mongoose.connect(`mongodb://localhost/${process.env.DB_NAME}`,{
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
//     .then(()=> console.log(`Connected to the ${process.env.DB_NAME} database!`))
//     .catch(err=>console.log("Looks like we made a wrong turn somehwere?", err))