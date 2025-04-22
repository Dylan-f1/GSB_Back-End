const User = require('../models/user_model')

const createUser = async (req, res) => {
    const {name, email, password, role} = req.body
    const user = new User({name, email, password, role })
    await user.save()
    res.status(201).json(user)
}
const getUsers = async (req, res) => {
    const users = await User.find()
    res.status(200).json(users)
}

const updateUser = async (req, res) => {
    const {email} = req.params
    const {name, password, role} = req.body
    const user = await User.findOneAndUpdate({email}, {name, password, role}, {new: true})
    res.status(200).json(user)
}

const deleteUser = async (req, res) => {
    const {email} = req.params
    await User.findOneAndDelete({email})
    res.status(200).json({message: 'User deleted'})
}   
const getUserByEmail = async (req, res) => {
    const {email} = req.params
    const user = await User.findOne({email})
    res.status(200).json(user)
}




module.exports = {createUser, getUsers, updateUser, deleteUser, getUserByEmail}