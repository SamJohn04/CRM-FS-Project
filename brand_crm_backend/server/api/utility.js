const { getClients } = require('./client/get')
const { newClient } = require('./client/add')
const { updateUser } = require('./client/update')
const { deleteUser } = require('./client/delete')
const { addMessage } = require('./client/message/add')

const client = {
    get: getClients,
    add: newClient,
    delete: deleteUser,
    update: updateUser,
    message: {
        add: addMessage
    }
}

module.exports = { client }