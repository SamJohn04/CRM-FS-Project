const { deleteClient } = require("../../../mongo/connect");

const deleteUser = async ({ uID }) => await deleteClient(uID).catch(console.log)

module.exports = {deleteUser}