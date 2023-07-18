const { updateClient } = require("../../../../mongo/connect")

const addMessage = async ({user, message}) => {
    try {
        if(user.clientHistory.messages) {
            user.clientHistory.messages.push(message)
        } else
            user.clientHistory.messages = [message]
        user.clientHistory.lastMessage = Date.now()
        return await updateClient(user).catch(console.log)
    } catch(e) {
        console.log(e)
    }
}

module.exports = { addMessage }