const { fetchClients } = require('../../../mongo/connect')

const getClients = async () => await fetchClients().catch((e) => {console.log(e); return undefined})

module.exports = { getClients }