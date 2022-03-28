const PostController = require("../Controllers/post.controller")



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

}