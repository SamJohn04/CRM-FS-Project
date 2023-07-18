const {getId, addClient} = require('../../../mongo/connect')

const newClient = async ({name, email, phoneNumber, userIcon}) => {
    try {
        const currentTime = Date.now()
        const clientInfo = {
            name,
            email,
            phoneNumber,
            userIcon: userIcon ?? null,
            clientHistory: {lastMessage: currentTime, messages: []}
        }
        clientInfo.uID = await getId()
        return await addClient(clientInfo).catch(console.log)
    } catch {
        return null
    }
}

module.exports = { newClient }