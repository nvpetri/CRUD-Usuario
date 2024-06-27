const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

exports.createAddress = async(data) => {
    return await prisma.tbl_endereco.create({ data })
}

exports.getAllAddresses = async() => {
    return await prisma.tbl_endereco.findMany()
}

exports.getAddressById = async(id) => {
    return await prisma.tbl_endereco.findUnique({ where: { id: parseInt(id) } })
}

exports.updateAddress = async(id, data) => {
    return await prisma.tbl_endereco.update({ where: { id: parseInt(id) }, data })
}

exports.deleteAddress = async(id) => {
    return await prisma.tbl_endereco.delete({ where: { id: parseInt(id) } })
}