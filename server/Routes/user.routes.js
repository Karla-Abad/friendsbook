const UserController = require("../Controllers/user.controller");
const { authenticate } = require("../config/jwt.config");

module.exports = (app) => {

    // findAll Users
    app.get("/api/users", UserController.findAllUsers)

    //register
    app.post("/api/users/register", UserController.register)

    //login
    app.post("/api/users/login", UserController.login)

    // logout
    app.post("/api/users/logout", UserController.logout)

    // get current user logged in
    app.get("/api/users/lock", authenticate, UserController.userLoggedIn)

    // updateUser
    app.put("/api/users/:id", UserController.updateUser)

    // deleteUser
    app.delete("/api/users/:id", UserController.deleteUser)

    // findOneUser
    app.get("/api/users/:id", UserController.findOneUser)

    // follow a user
    app.put("/api/users/:id/follow", UserController.followUser)

    // unfollow a user
    app.put("/api/users/:id/unfollow", UserController.unfollowUser)

}

