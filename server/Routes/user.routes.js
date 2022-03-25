const UserController = require('../Controllers/user.controller')
const { authenticate } = require("../config/jwt.config")

module.exports = (app) => {
    app.post("/api/users/register", UserController.register)
    
    app.post("/api/users/login", UserController.login)
    app.post("/api/users/logout", UserController.logout)

    app.get("/api/users/lock",authenticate, UserController.userLoggedIn)

    // add follow and unfollow
    // add like and unlike
}