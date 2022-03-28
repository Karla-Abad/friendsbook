const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const UserSchema = new mongoose.Schema({

    username: {
        type: String,
        required: [true,"Username is required"],
        minLength: [3,"Username must be at least 3 characters"],
        maxLength: [20,"Username must not be more than 20 characters"],
        unique: true    // will test for unique; according to docs creates unique index
                        // may not catch uppercase vs lowercase
    },
    email:{
        type: String,
        required: [true,"Email is required"],
        maxlength: 50,    // UPDATED: max is used for only numbers and dates; maxlength is for strings
        unique: true
    },
    password:{
        type:String,
        required:[true,"Password is required"],
        minLength:[8, "Password MUST be at least 8 characters"],
    },
    profilePicture:{
        type:String,
        default:""
    },
    coverPicture:{
        type:String,
        default:""
    },
    followers:{
        type:Array,
        default:[]
    },
    following:{
        type:Array,
        defualt:[]
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    description: {
        type: String,
        maxLength:[50, "Max characters is 50"]
    },
    city: {
        type:String,
        maxLength:[50, "Max characters is 50"]
    },
    from:{
        type:String,
        maxLength:[50, "Max characters is 50"]
    },
    relationship:{
        type: Number,
        enum:[1,2,3]
    }
}, {timestamps: true})

// Virtual Field
UserSchema.virtual("confirmPassword")
    .get(()=>this._confirmPassword)
    .set((value)=>this._confirmPassword = value)

//middlware
UserSchema.pre("validate", function(next){

    if(this.password !== this.confirmPassword){
        this.invalidate("confirmPassword", "Passwords must Match!!")
        console.log("Passwords don't Match")
    }

    next()
})

UserSchema.pre("save", function(next){
    console.log("In pre save")

    bcrypt.hash(this.password,10)
        .then((hashedPassword) =>{
            this.password = hashedPassword;
            next()
        })
})


const User = mongoose.model("User", UserSchema)

module.exports = User











// const UserSchema = new mongoose.Schema({

//     username: {
//         type: String,
//         required: [true,"Username is required"],
//         minLength: [3,"Username must be at least 3 characters"],
//         maxLength: [20,"Username must not be more than 20 characters"],
//         unique: false
//     },
//     email:{
//         type: String,
//         required: [true,"Email is required"],
//         max: 50,
//         unique: false
//     },
//     password:{
//         type:String,
//         required:[true,"Password is required"],
//         minLength:[8, "Password MUST be at least 8 characters"],
//     },
//     profilePicture:{
//         type:String,
//         default:""
//     },
//     coverPicture:{
//         type:String,
//         default:""
//     },
//     followers:{
//         type:Array,
//         default:[]
//     },
//     following:{
//         type:Array,
//         defualt:[]
//     },
//     isAdmin:{
//         type:Boolean,
//         default:false
//     }
// }, { timestamps: true })

// //Virtual field
// //Stores info from our req, but will not be saved to the
// // collection/db Ex. confPassword. Do not need to stor it.
// UserSchema.virtual("confirmPassword")
//     .get(()=>this._confirmPassword)
//     .set((value)=>this._confirmPassword = value)

// // Middleware
// UserSchema.pre("validate", function(next){



//     next()
// })



// module.exports = User