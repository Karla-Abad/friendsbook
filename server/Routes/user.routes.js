const UserController = require('../Controllers/user.controller')
const { authenticate } = require("../config/jwt.config")

module.exports = (app) => {
    // findAll Users
    app.get("/api/users", UserController.findAllUsers)
    app.post("/api/users/register", UserController.register)
    
    app.post("/api/users/login", UserController.login)
    app.post("/api/users/logout", UserController.logout)

    app.get("/api/users/lock",authenticate, UserController.userLoggedIn)

    // updateUser
    // app.put("/api/users/:id", UserController.updateUser)
    
    // deleteUser
    app.delete("/api/users/:id", UserController.deleteUser)
    // findOneUser
    app.get("/api/users/:id", UserController.findOneUser)
    // add follow and unfollow
    // add like and unlike
}