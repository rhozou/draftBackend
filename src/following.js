"use strict";

const followedUsers = { username: "Rho", following: ["Scott", "Mary", "Jim"]}

const getFollowedUsers = (req, res) => {
    const user = req.params.user ? req.params.user : followedUsers.username
    res.send({username: user, following: followedUsers.following})
}

const addFollower = (req, res) => {
    if (req.params.user){
        followedUsers.following.push(req.params.user)
        res.send({username: followedUsers.username, following: followedUsers.following})
    }
}

const deleteFollower = (req, res) => {
    if (req.params.user){
        const newFollowers = followedUsers.following.filter(function(user){
            return user !== req.params.user
        })
        followedUsers.following = newFollowers
    }
}

module.exports = app => {
     app.get('/following/:user?', getFollowedUsers)
     app.put('/following/:user', addFollower)
     app.delete('/following/:user', deleteFollower)
}