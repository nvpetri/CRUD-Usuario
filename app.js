/**
 * CRUD USERS Projeto Pessoal
 * */

/**
 * npm install express --save
 * npm install cors --save
 * npm install body-parser --save
 * npm install prisma --save (realiza a conexão com o banco)
 * npm install @prisma/client --save (executa os scripts SQL)
 * npx prisma init
 * npx prisma db pull
 * npx prisma generate
 */
/************************************************************************** *\
                    CONFIGURAÇÃO DO AMBIENTE
\*************************************************************************1 */

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const userController = require('./controller/userController.js')
const addressController = require('./controller/addressController.js')

const app = express()
const bodyParserJSON = bodyParser.json()

app.use(cors())
app.use(bodyParserJSON)

app.post('/v1/usuario', userController.createUser)
app.get('/v1/usuario', userController.getAllUsers)
app.get('/v1/usuario/:id', userController.getUserById)
app.put('/v1/usuario/:id', userController.updateUser)
app.delete('/v1/usuario/:id', userController.deleteUser)

app.post('/v1/endereco', addressController.createAddress)
app.get('/v1/endereco', addressController.getAllAddresses)
app.get('/v1/endereco/:id', addressController.getAddressById)
app.put('/v1/endereco/:id', addressController.updateAddress)
app.delete('/v1/endereco/:id', addressController.deleteAddress)

app.listen(8080, () => {
    console.log(`Server is running on port 8080`)
})