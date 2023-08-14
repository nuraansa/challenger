const express = require('express')
const bodyParser = require('body-parser')
const routes = express.Router()
//import all models objects
const {users} = require('../model')

//========== User's router ==========
routes.get('/users', (req, res)=> {
    users.fetchUsers (req, res) 
})
routes.get('/users/:id', (req, res)=> {
    users.fetchUsers (req, res)
})
routes.post('/register', bodyParser.json(), (req, res)=> {
    users.register (req, res)
})
routes.put('/users/:id', bodyParser.json(), (req, res)=> {
    users.fetchUsers (req, res)
})
// routes.patch('/users/:id', bodyParser.json(), (req, res)=> {
//     users.fetchUsers (req, res)
// })
routes.delete('/user/:id', (req, res)=> {
    users.deleteUser (req, res)
})
module.exports = {
    express,
    routes
}