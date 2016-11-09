"use strict";

const Profile = {
        username: 'Rho',
        headline: 'I am a good developer!',
        email: 'xz9@rice.edu',
        zipcode: 12345,
        dob: 669967200000,
        avatar: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4e/DWLeebron.jpg/220px-DWLeebron.jpg',
        password: 'pwd',
        followers: ['Scott', 'Mary', 'Jane']
}


const getHeadlines = (req, res) => {
    if (!req.user) req.user = Profile.username
    const users = req.params.users ? req.params.users.split(',') : [req.user]
    const headlinesOutput = []

    users.forEach(function(user){
        headlinesOutput.push({username: user, headline: Profile.headline})
    })

    res.send({headlines: headlinesOutput})
}

const putHeadline = (req, res) => {
    if (req.body.headline) {
        Profile.headline = req.body.headline
    }
    res.send({username: Profile.username, headline: req.body.headline})
}

const getEmail = (req, res) => {
    if(req.params.user){
        res.send({username: req.params.user, email: Profile.email})
    }
    else{
        res.send({username: Profile.username, email: Profile.email})
    }
}

const putEmail = (req, res) => {
    if (req.body.email) {
        Profile.email = req.body.email
    }
    res.send({username: Profile.username, email: req.body.email})
}

const getZipcode = (req, res) => {
    if(req.params.user){
        res.send({username: req.params.user, zipcode: Profile.zipcode})
    }
    else{
        res.send({username: Profile.username, zipcode: Profile.zipcode})
    }
}

const putZipcode = (req, res) => {
    if (req.body.zipcode) {
        Profile.zipcode = req.body.zipcode
    }
    res.send({username: Profile.username, zipcode: req.body.zipcode})
}

const getAvatars = (req, res) => {
    if (!req.user) req.user = Profile.username
    const users = req.params.users ? req.params.users.split(',') : [req.user]
    const avatarsOutput = []

    users.forEach(function(user){
        avatarsOutput.push({username: user, avatar: Profile.avatar})
    })

    res.send({avatars: headlinesOutput})
}

const putAvatars = (req, res) => {
    if (req.body.img) {
        Profile.avatar = req.body.img
    }
    res.send({username: Profile.username, avatar: req.body.img})
}

const getDOB = (req, res) => {
    res.send({username: Profile.username, dob: Profile.dob})
}

module.exports = app => {
     app.get('/headlines/:users*?', getHeadlines)
     app.put('/headline', putHeadline)
     app.get('/email/:user?', getEmail)
     app.put('/email', putEmail)
     app.get('/zipcode/:user?', getZipcode)
     app.put('/zipcode', putZipcode)
     app.get('/avatars/:user?', getAvatars)
     app.put('/avatar', putAvatars)
     app.get('/dob', getDOB)
}

module.exports.profile = Profile

module.exports.userLogin = (uname) => {
    Profile.username = uname
}

module.exports.userRegister = (uname, email, dob, zipcode, pwd) => {
    Profile.username = uname
    Profile.email = email
    Profile.dob = dob
    Profile.zipcode = zipcode
    Profile.password = pwd
}

module.exports.updatePwd = (pwd) => {
    Profile.password = pwd
}

module.exports.addFollower = (uid) => {
    Profile.followers.push(uid)
}

module.exports.deleteFollower = (uid) => {
    const index = Profile.followers.indexOf(uid)
    if (index !== -1){
        Profile.followers.splice(index, 1)
    }
}