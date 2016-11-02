"use strict";

const profileModule = require("./profile")

const getFollowedUsers = (req, res) => {
    const user = req.params.user ? req.params.user : profileModule.profile.username
    res.send({username: user, following: profileModule.profile.followers})
}

const addFollower = (req, res) => {
    if (req.params.user){
        profileModule.addFollower(req.params.user)
        res.send({username: profileModule.profile.username, following: profileModule.profile.followers})
    }
}

const deleteFollower = (req, res) => {
    if (req.params.user){
        profileModule.deleteFollower(req.params.user)
        res.send({username: profileModule.profile.username, following: profileModule.profile.followers})
    }
}

module.exports = app => {
     app.get('/following/:user?', getFollowedUsers)
     app.put('/following/:user', addFollower)
     app.delete('/following/:user', deleteFollower)
}