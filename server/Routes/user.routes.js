const UserController = require('../Controllers/user.controller')

module.exports = (app) => {
    app.post("/api/users/register", UserController.register)
    
    app.post("/api/users/login", UserController.login)
    app.post("/api/users/logout", UserController.logout)
}