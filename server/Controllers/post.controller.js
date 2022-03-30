const { rmSync } = require("fs")
const Post = require("../Models/post.model")
const User = require("../Models/user.model")
const jwt = require("jsonwebtoken");


module.exports = {

    // create a post -- complete
    createPost: (req, res) => {
        const post = new Post(req.body)
        post.user = req.jwtpayload.id
        post.save()
            .then((newPost) => {
                console.log(newPost)
                res.json({
                    message: "New post created.",
                    post: newPost   // can also be written newPost -- will be key and value
                })
            })
            .catch((err) => {
                console.log(err)
                res.status(400).json({ message: "Create Post failed.", err })
            })
    },

    // update a post -- complete
    updatePost: (req, res) => {
        Post.findOneAndUpdate({ _id: req.params.id },
            req.body,
            { new: true, runValidators: true }
        )
            .then((updatedPost) => {
                if (User._id === req.body.userId) {    // import User model to define _id
                    console.log(updatedPost)
                    res.json({ message: "Post updated." })
                }
                else {
                    res.json({ message: "Can only update your posts." })
                }
            })
            .catch((err) => {
                console.log(err)
                res.status(400).json({ message: "Update failed.", err })
            })

    },

    // delete a post --- complete
    deletePost: (req, res) => {
        Post.deleteOne({ _id: req.params.id })
            .then((deletedPost) => {
                console.log(deletedPost)
                res.json({ message: "Post deleted" })
            })
            .catch((err) => {
                console.log(err)
                res.status(400).json({ message: "Delete post failed.", err })
            })

    },

    // DL: Fixed Like/Dislike
    likeUnlikePost: (req, res) => {
        // const decodedJwt = jwt.decode(req.cookies.usertoken, { complete: true });
        Post.findById({ _id: req.params.id })
            .then((foundPost) => {
                console.log("Found Post: ",foundPost)
                console.log("req.Body: ", req.body)
                console.log("is this inside Likes?: ",req.body.userId )
                if(!foundPost.likes.includes(req.body.userId)) {
                    foundPost.updateOne({ $push: { likes: req.body.userId} })
                        .then(()=>console.log("Pushed to Likes!"))
                        .catch((err)=>console.log("Something went wrong.", err))
                    res.json({ message: "Post liked", foundPost: foundPost })
                }
                else {
                    foundPost.updateOne({ $pull: { likes: req.body.userId} })
                        .then(()=>console.log("PUlled from Likes"))
                        .catch((err)=>console.log("Something went wrong.", err))
                    res.json({ message: "Post unliked", foundPost: foundPost })
                }
            })
            .catch((err) => {
                console.log(err)
                res.status(400).json({ message: "Like / unlike failed.", err })
            })
    },

    // get a post -- complete
    onePost: (req, res) => {
        Post.findOne({ _id: req.params.id })
            .then((singlePost) => {
                console.log(singlePost)
                res.json(singlePost)
            })
            .catch((err) => {
                console.log(err)
                res.status(400).json({ message: "Finding post failed.", err })
            })

    },

    // get timeline posts
    allPosts: (req, res) => {

    },


    // added for development testing -- complete
    everyPost: (req, res) => {
        Post.find()
            .then((catchThemAll) => {
                console.log(catchThemAll)
                res.json(catchThemAll)
            })
            .catch((err) => {
                console.log(err)
                res.status(400).json({ message: "Find every post failed.", err })
            })
    },

    //All this was added by Jackson 3/29 @ 4:30
    //This doesnt work. keep getting TypeError
    //originally this was built with an if check, that didnt work either
    userPosts:
        (req, res) => {
            User.findOne({ username: req.params.username })

                .then((userLoggedIn) => {

                    Post.find({ user: userLoggedIn._id })
                        .populate('user', 'username')
                        .then((allPostForUser) => {
                            console.log(allPostForUser)
                            res.json(allPostForUser)
                        })
                        .catch(err => res.status(400).json(err))
                })
                .catch(err => {
                    console.log(err)
                    res.status(400).json(400)
                })
        }
    // Post.find({ userId: req.jwtpayload.id })
    //     .populate('userId', 'username')
    //     .then((thisUsersPosts) => {
    //         console.log(thisUsersPosts)
    //         res.json(thisUsersPosts)
    //     })
    //     .catch(err => {
    //         console.log(err)
    //         res.status(400).json(err)
    //     })



}