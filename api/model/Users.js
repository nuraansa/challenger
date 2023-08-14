//Users
const db = require("../config")
const {hash, compare, hashSync} = require('bcrypt')
const {createToken} = require('../middleware/AuthenticateUser')
class Users{
    //fetch multiple users
    fetchUsers(req, res) {
        const query = `
    SELECT userID, firstName, lastName, gender, userDOB, emailAdd, userPass, profileUrl
    FROM Users
    `
    db.query(query,(err, results)=> {
        if(err) throw err
        res.json({
              status: res.statusCode,
              results
        })
    })
    }
    //fetch single user
    fetchUser(req, res) {
        const query = `
        SELECT userID, firstName, lastName, gender, userDOB, emailAdd, userPass, profileUrl
        FROM Users
        WHERE userID = ${req.params.id}
        `
        db.query(query, (err, result)=> {
            if(err) throw errres.json({
                status: res.statusCode,
                result
            })
        })
    }
    //login
    login(req, res) {
    }
    //register user
    async register(req, res) {
        const data = req.body
        //encrypt password (hash)
        data.userPass = await hash(data.userPass, 15) 
        //payload - data coming from user
        const user = {
            emailAdd: data.emailAdd,
            userPass: data.userPass
        }
        //query
        const query = `
        INSERT INTO Users
        SET ?;
        `
        //or set can be (VALUES ?, ?, ?, ?, ?, ?, ?)
        db.query(query, [data], (err)=> {
            if(err) throw err
            //create token
            let token = createToken(user)
            res.cookie ("Legit User", token, {
                maxAge: 3600000,
                httpOnly: true
            })
            res.json({
                status: res.statusCode,
                msg: "You are now registered"
            })
        })
    }
    //update new user
    updateUser(req, res) {
        const query = `
        UPDATE Users
        SET ?
        WHERE userID = ?
        `
        db.query(query, [req.body, req.params.id], 
            (err)=> {
                if (err) throw err
                res.json({
                    status: res.statusCode,
                    msg: "The user record was updated."
                })
            })
    }
    //delete user
    deleteUser(req, res) {
        const query = `
        DELETE FROM Users
        WHERE userID = ${req.params.id};
        `
        db.query(query, (err)=> {
                if (err) throw err
                res.json({
                    status: res.statusCode,
                    msg: "The user record was deleted."
                })
            })
    }
}
module.exports = Users