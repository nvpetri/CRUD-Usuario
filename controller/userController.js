const userDao = require('../model/dao/userDao.js')

exports.createUser = async(req, res) => {
    const data = req.body
    try {
        const newUser = await userDao.createUser(data)
        res.status(201).json(newUser)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

exports.getAllUsers = async(req, res) => {
    try {
        const users = await userDao.getAllUsers()
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

exports.getUserById = async(req, res) => {
    const { id } = req.params
    try {
        const user = await userDao.getUserById(id)
        if (user) {
            res.status(200).json(user)
        } else {
            res.status(404).json({ error: 'User not found' })
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};

exports.updateUser = async(req, res) => {
    const { id } = req.params
    const data = req.body
    try {
        const updatedUser = await userDao.updateUser(id, data)
        if (updatedUser) {
            res.status(200).json(updatedUser)
        } else {
            res.status(404).json({ error: 'User not found' })
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

exports.deleteUser = async(req, res) => {
    const { id } = req.params
    try {
        const deletedUser = await userDao.deleteUser(id)
        if (deletedUser) {
            res.status(204).end()
        } else {
            res.status(404).json({ error: 'User not found' })
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}