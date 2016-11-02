"use strict";

const profile = {
        username: 'Rho',
        headline: 'I am a good developer!',
        email: 'xz9@rice.edu',
        zipcode: 12345,
        dob: 669967200000,
        avatar: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4e/DWLeebron.jpg/220px-DWLeebron.jpg',
}

const getHeadlines = (req, res) => {
    if (!req.user) req.user = profile.username
    const users = req.params.users ? req.params.users.split(',') : [req.user]
    const headlinesOutput = []

    users.forEach(function(user){
        headlinesOutput.push({username: user, headline: profile.headline})
    })

    res.send({headlines: headlinesOutput})
}

const putHeadline = (req, res) => {
    if (req.body.headline) {
        profile.headline = req.body.headline
    }
    res.send({username: profile.username, headline: req.body.headline})
}

const getEmail = (req, res) => {
    if(req.params.user){
        res.send({username: req.params.user, email: profile.email})
    }
    else{
        res.send({username: profile.username, email: profile.email})
    }
}

const putEmail = (req, res) => {
    if (req.body.email) {
        profile.email = req.body.email
    }
    res.send({username: profile.username, email: req.body.email})
}

const getZipcode = (req, res) => {
    if(req.params.user){
        res.send({username: req.params.user, zipcode: profile.zipcode})
    }
    else{
        res.send({username: profile.username, zipcode: profile.zipcode})
    }
}

const putZipcode = (req, res) => {
    if (req.body.zipcode) {
        profile.zipcode = req.body.zipcode
    }
    res.send({username: profile.username, zipcode: req.body.zipcode})
}

const getAvatars = (req, res) => {
    if (!req.user) req.user = profile.username
    const users = req.params.users ? req.params.users.split(',') : [req.user]
    const avatarsOutput = []

    users.forEach(function(user){
        avatarsOutput.push({username: user, avatar: profile.avatar})
    })

    res.send({avatars: headlinesOutput})
}

const putAvatars = (req, res) => {
    if (req.body.img) {
        profile.avatar = req.body.img
    }
    res.send({username: profile.username, avatar: req.body.img})
}

const getDOB = (req, res) => {
    res.send({username: profile.username, dob: profile.dob})
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
