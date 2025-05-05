const jwt = require('jsonwebtoken')
const User = require('../models/user_model')
const sha256 = require('crypto-js/sha256')

const JWT_SECRET = process.env.JWT_SECRET

const login = async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' })
    }
    if (user.password !== sha256(password + process.env.SALT)) {
        return res.status(401).json({ message: 'Invalid email or password' })
    }
    const token = jwt.sign({ userId: user._id, role: user.role, email: user.email }, process.env.JWT_SECRET, { expiresIn: '24h' })
    res.status(200).json({ token })
}

const verifyToken = async (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1]
    if (!token) {
        return res.status(401).json({ message: 'No token provided' })
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Invalid token' })
        }
        req.user = decoded
        next()
    })
}

const isAdmin = async (req, res) => {

}

module.exports = { login, verifyToken, isAdmin }
