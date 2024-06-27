const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

exports.createUser = async(data) => {
    return await prisma.tbl_users.create({ data })
}

exports.getAllUsers = async() => {
    return await prisma.tbl_users.findMany()
}

exports.getUserById = async(id) => {
    return await prisma.tbl_users.findUnique({ where: { id: parseInt(id) } })
}

exports.updateUser = async(id, data) => {
    return await prisma.tbl_users.update({ where: { id: parseInt(id) }, data })
}

exports.deleteUser = async(id) => {
    return await prisma.tbl_users.delete({ where: { id: parseInt(id) } })
}