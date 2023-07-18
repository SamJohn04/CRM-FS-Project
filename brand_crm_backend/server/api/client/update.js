const { updateClient } = require("../../../mongo/connect");

const updateUser = async (user) => updateClient(user).catch(console.log)

module.exports = {updateUser}