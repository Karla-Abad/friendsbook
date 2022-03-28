const mongoose = require("mongoose")



const PostSchema = new mongoose.Schema({
                            // can be written to reference user -- test later once complete
    userId: {               // user: {
        type: String,           // type: mongoose.Schema.Types.ObjectId,
        required: true          // ref: "User" 
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