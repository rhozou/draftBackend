"use strict";

const login = (req, res) => {
    res.send({username: req.body.username, result: "success"})
}

const logout = (req, res) => {
    res.send("OK")
}

const register = (req, res) => {
    res.send({username: req.body.username, result: "success"})
}

const password = (req, res) => {
    res.send({username: "Rho", status: "will not change"})
}


module.exports = app => {
     app.post('/login', login)
     app.put('/logout', logout)
     app.post('/register', register)
     app.put('/password', password)
}