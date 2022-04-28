const User = require("../Models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  register:
    (req, res) => {
      const user = new User(req.body);

      user.save()
        .then((newUser) => {
          console.log(newUser);
          console.log("Successfully Registered");
          res.json({
            successMessage: "Thank you for registering",
            user: newUser,
          });
        })
        .catch((err) => {
          console.log("Register not successfull!");
          res.status(400).json(err);
        });
    },

  login: (req, res) => {
    User.findOne({ email: req.body.email })
      .then((userRecord) => {
        // if no email
        if (userRecord === null) {
          res.status(400).json({ message: "Invalid Login Attempt" }); // no email
        } else {
          // email found, compare password
          bcrypt
            .compare(req.body.password, userRecord.password)
            .then((isPasswordValid) => {
              if (isPasswordValid) {
                console.log("Password is valid");
                res
                  .cookie(
                    "usertoken",
                    jwt.sign(
                      {
                        id: userRecord._id,
                        email: userRecord.email,
                        username: userRecord.username,
                      },
                      process.env.JWT_SECRET
                    ),
                    {
                      httpOnly: true,
                      expires: new Date(Date.now() + 10000000),
                    }
                  )
                  .json({
                    message: "Welcome user",
                    userLoggedIn: userRecord.username,
                    userId: userRecord._id,
                  });
              } else {
                res.status(400).json({
                  message: "Invalid Access", // bad password
                });
              }
            })
            .catch((err) => {
              console.log(err);
              res.status(400).json({ message: "Invalid Attempt" });
            });
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json({ message: "Invalid Attempt" });
      });
  },

  logout: (req, res) => {
    console.log("Logging out");
    res.clearCookie("usertoken");
    res.json({ message: "Logged out" });
  },

  userLoggedIn: (req, res) => {
    User.findOne({ _id: req.jwtpayload.id })
      .then((user) => {
        console.log(user);
        res.json(user);
      })
      .catch((err) => {
        console.log(err);
        res.json(err);
      });
  },

  // update user
  updateUser: (req, res)=> {
    User.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators: true})
    .then(updatedUser => res.json(updatedUser))
    .catch(err => res.status(400).json({err}))
  },
  // updateUser: (req, res) => {
  //   const decodedJwt = jwt.decode(req.cookies.usertoken, { complete: true });
  //   User.findOneAndUpdate({ _id: decodedJwt.payload.id }, req.body, {
  //     new: true,
  //     runValidators: true,
  //   })
  //     .then((updatedUser) => {
  //       console.log(updatedUser);
  //       res.json(updatedUser);
  //     })
  //     .catch((err) => {
  //       console.log("Failed to update user");
  //       res
  //         .status(400)
  //         .json({ message: "Something went wrong with update.", error: err });
  //     });
  // },

  // delete user -- in progress -- currently working -- retest to validate
  deleteUser: (req, res) => {
    User.findOneAndDelete({ _id: req.params.id })
      .then((deletedUser) => {
        if (deletedUser.id === req.params.id || req.body.isAdmin) {
          console.log(deletedUser);
          res.clearCookie("usertoken");
          console.log("Profile deleted successfully");
          res.json("Profile has been deleted");
        } else {
          return res.status(403).json("You can only delete your own account");
        }
      })
      .catch((err) => {
        console.log("Somethig went wrong. Could not delete user.");
        res.status(400).json(err);
      });
  },

  // findOneUser
  findOneUser: (req, res) => {
    User.findById({ _id: req.params.id })
      .then((foundUser) => {
        console.log(foundUser);
        res.json(foundUser);
      })
      .catch((err) => {
        console.log("Search Failed");
        res.json({
          message: "Something went wrong trying to find user",
          error: err,
        });
      });
  },

  // findAllUsers
  findAllUsers: (req, res) => {
    User.find()
      .then((allUsers) => {
        console.log(allUsers);
        res.json(allUsers);
      })
      .catch((err) => {
        console.log("Find All Users Failed");
        res.json({
          message: "Something went wrong trying to find all users",
          error: err,
        });
      });
  },

  // follow a user
  followUser: (req, res) => {
    const decodedJwt = jwt.decode(req.cookies.usertoken, { complete: true });
    const user = User.findById({ _id: req.params.id })
    const currentUser = User.findById({ _id: decodedJwt.payload.id })

    Promise.all([user, currentUser])
      .then(([foundUser, loggedInUser]) => {
        if (!foundUser.followers.includes(decodedJwt.payload.id)) {
          // console.log("payload.id", {_id:decodedJwt.payload.id} )
          // console.log("found User: ",foundUser)
          // console.log("logged In user: ",loggedInUser)
          foundUser.updateOne({ $push: { followers: decodedJwt.payload.id } })
            .then(() => console.log("Found User Follwers: ", foundUser.followers))
            .catch((err) => console.log("Something went wrong ", err))
          // console.log("follower", decodedJwt.payload.id)
          loggedInUser.updateOne({ $push: { following: req.params.id } })
            .then(() => console.log("Logged In User Followings:", loggedInUser.following))
            .catch(err => console.log("Something went wrong ", err))
          // console.log("following", req.params.id)
          res.status(200).json("Followed User")
        } else {
          res.status(403).json("Allready Following this user.")
        }
      })
      .catch((err) => {
        console.log("Something Went Wrong.")
        res.status(500).json(err)
      })

  },

  // unfollow a user
  unfollowUser: (req, res) => {
    const decodedJwt = jwt.decode(req.cookies.usertoken, { complete: true });
    const user = User.findById({ _id: req.params.id })
    const currentUser = User.findById({ _id: decodedJwt.payload.id })

    Promise.all([user, currentUser])
      .then(([foundUser, loggedInUser]) => {
        if (foundUser.followers.includes(decodedJwt.payload.id)) {
          foundUser.updateOne({ $pull: { followers: decodedJwt.payload.id } })
            .then(() => console.log("Found User Follwers: ", foundUser.followers))
            .catch((err) => console.log("Something went wrong ", err))
          loggedInUser.updateOne({ $pull: { following: req.params.id } })
            .then(() => console.log("Logged In User Followings:", loggedInUser.following))
            .catch(err => console.log("Something went wrong ", err))
          res.status(200).json("User Unfollowed")
        } else { res.status(403).json("Allready Not Following this user.") }
      })
      .catch((err) => {
        console.log("Something Went Wrong.")
        res.status(500).json(err)
      })

  },
};
