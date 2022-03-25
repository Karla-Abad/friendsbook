const UserController = require('../Controllers/user.controller')

module.exports = (app) => {
    app.post("/api/users/register", UserController.register)
}