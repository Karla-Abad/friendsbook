const User = require("../Models/user.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

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

    login: (req, res) =>{
        User.findOne({email: req.body.email})
        .then((userRecord)=>{
            // if no email
            if(userRecord === null){
                res.status(400).json({message: "Invalid Login Attempt"}) // no email
            }
            else{
                // email found, compare password
                bcrypt.compare(req.body.password, userRecord.password)
                    .then((isPasswordValid)=>{
                        if(isPasswordValid) {
                            console.log("Password is valid")
                            res.cookie(
                                "usertoken",
                                jwt.sign(
                                    {
                                        id: userRecord._id,
                                        email: userRecord,
                                        username: userRecord.username

                                    },
                                    process.env.JWT_SECRET
                                ),
                                {
                                    httpOnly: true,
                                    expires: new Date(Date.now() + 10000000)
                                }
                            ).json({
                                message: "Welcome user",
                                userLoggedIn: userRecord.username,
                                userId: userRecord._id
                            })
                        }
                        else{
                            res.status(400).json({
                                message: "Invalid Access" // bad password
                            })
                        }
                    })
                    .catch((err)=>{
                        console.log(err)
                        res.status(400).json({message: "Invalid Attempt"})
                    })
            }
        })
        .catch((err)=>{
            console.log(err)
            res.status(400).json({message: ""})
        })
    },

    logout: (req, res) =>{
        console.log("Logging out")
        res.clearCookie("usertoken")
        res.json({message: "Logged out"})
    }
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