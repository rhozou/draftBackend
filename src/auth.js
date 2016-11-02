"use strict";

const profileModule = require("./profile")

const login = (req, res) => {
    profileModule.userLogin(req.body.username)
    res.send({username: req.body.username, result: "success"})
}

const logout = (req, res) => {
    res.send("OK")
}

const register = (req, res) => {
    profileModule.userRegister(req.body.username, req.body.email, req.body.dob,
     req.body.zipcode, req.body.password)
    res.send({username: req.body.username, result: "success"})
}

const password = (req, res) => {
    profileModule.updatePwd(req.body.password)
    res.send({username: profileModule.profile.username, status: "will not change"})
}


module.exports = app => {
     app.post('/login', login)
     app.put('/logout', logout)
     app.post('/register', register)
     app.put('/password', password)
}