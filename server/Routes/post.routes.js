const { authenticate } = require("../config/jwt.config")
const PostController = require("../Controllers/post.controller")
const Post = require("../Models/post.model")
const User = require('../Models/user.model')



module.exports = (app) => {

    // create a post
    app.post("/api/posts", PostController.createPost)

    // update a post
    app.put("/api/posts/:id", PostController.updatePost)

    // delete a post
    app.delete("/api/posts/:id", PostController.deletePost)

    // like or dislike post
    app.put("/api/posts/:id/like", PostController.likeUnlikePost)

    // get a post
    app.get("/api/posts/:id", PostController.onePost)

    // get timeline posts
    app.get("/api/posts/timeline/all", PostController.allPosts)

    // get all posts -- added for development testing
    app.get("/api/posts/all/catchThemAll", PostController.everyPost)

    //get all posts from one user -- added from video3 mark: ~ 41mins
    //Doesnt work..of course
    // app.get('/api/posts/profile/:username', authenticate, PostController.userPosts)


    app.get('/api/posts/profile/:username', async (req, res) => {
        try {
            const user = await User.findOne({ username: req.params.username })
            const posts = await Post.find({ userId: user._id })
            res.status(200).json(posts)
        }
        catch (err) {
            res.status(500).json(err)
            console.log(err)
        }
    })
}