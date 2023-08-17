const {sign, verify} = require('jsonwebtoken')
require('dotenv').config()

function createToken(user) {
    return sign({
        email: user.emailAdd,
        userPass: user.userPass
    },
    process.env.SECRET_KEY,
    {
        expiresIn: '1h'
    }
    )
}
function verifyToken(req, res, next){
    const token = req.headers['Authorization']
}
module.exports = {
    createToken
}