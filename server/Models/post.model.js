const mongoose = require("mongoose")



const PostSchema = new mongoose.Schema({
                            // can be written to reference user -- test later once complete
    user: {               // user: {
        type: mongoose.Schema.Types.ObjectId,           // type: mongoose.Schema.Types.ObjectId,
        ref: "User"          // ref: "User" 
    },                      // }

    desc: {
        type: String,
        maxlength: 500
    },

    img: {
        type: String
    },

    likes: {
        type: Array,    // can write [String] or []
        default: []     // implicitly have a default value of []
    }


}, {timestamps: true})


const Post = mongoose.model("Post", PostSchema)

module.exports = Post