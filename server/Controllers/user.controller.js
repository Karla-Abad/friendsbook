const User = require("../Models/user.model")
const bcrypt = require("bcrypt")
const jst = require("jsonwebtoken")

module.exports = {

    register: (req, res) => {

        const user = new User(req.body);

        user.save()
            .then((newUser)=>{
                console.log(newUser)
                console.log("Successfully Registered")
                res.json({
                    successMessage: "Thank you for registering",
                    user: newUser
                });
            })
            .catch((err)=>{
                console.log("Register not successfull!")
                res.status(400).json(err);
            })
    },
}
















// module.exports = {

//     register: (req, res)=>{
//         // use the req data and the User Model contructor to create a user object



//         //info is alread in the instance of THIS object. no need to pass anything in
//         // save is an instance method. doesn't require anything passed in
//         // create is static and takes the object as the parameter.

//         user.save()
//             .then((newUser)=>{
//                 console.log(newUser);
//                 console.log("Successfully Registered")
//                 res.json({
//                     successMessage: "Thank you for registering",
//                     user: newUser
//                 });
//             })
//             .catch((err)=>{
//                 console.log("Register not successfull")
//                 res.status(400).json(err);
//             })
//     },
// }