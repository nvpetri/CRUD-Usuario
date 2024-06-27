const addressDao = require('../model/dao/addressDao.js')

exports.createAddress = async(req, res) => {
    const data = req.body
    try {
        const newAddress = await addressDao.createAddress(data)
        res.status(201).json(newAddress)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

exports.getAllAddresses = async(req, res) => {
    try {
        const addresses = await addressDao.getAllAddresses()
        res.status(200).json(addresses)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

exports.getAddressById = async(req, res) => {
    const { id } = req.params
    try {
        const address = await addressDao.getAddressById(id)
        if (address) {
            res.status(200).json(address)
        } else {
            res.status(404).json({ error: 'Address not found' })
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

exports.updateAddress = async(req, res) => {
    const { id } = req.params
    const data = req.body
    try {
        const updatedAddress = await addressDao.updateAddress(id, data)
        if (updatedAddress) {
            res.status(200).json(updatedAddress)
        } else {
            res.status(404).json({ error: 'Address not found' })
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

exports.deleteAddress = async(req, res) => {
    const { id } = req.params
    try {
        const deletedAddress = await addressDao.deleteAddress(id)
        if (deletedAddress) {
            res.status(204).end()
        } else {
            res.status(404).json({ error: 'Address not found' })
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}