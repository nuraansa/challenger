//Users
const db = require("../config")
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