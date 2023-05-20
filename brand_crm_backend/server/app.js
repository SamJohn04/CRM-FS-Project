const express = require('express')
const app = express()

const { addClient, getId, fetchClients, deleteClient, updateClient } = require('../mongo/connect')

const cors = require('cors')
app.use(cors())

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.listen(8080, () => {console.log('connected! Hello World!');})

app.post('/addUser', (req, res) => {
    
    const timeNow = Date.now()
    const clientInfo = {
        name: req.body.name,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        userIcon: req.body.userIcon ?? null,
        clientHistory: {lastMessage: timeNow, messages: {unread:[], read: []}}
    }
    getId().then((val) => {
        clientInfo.uID = val;
        addClient(clientInfo).then(() => res.end())
    }).catch(
        () => res.end()
    )
})

app.post('/client/delete', (req, res) => {
    console.log(req.body)
    deleteClient(req.body.uID).then((e) => {
        console.log(e)
        res.end();
    }).catch(() => res.end())
})

app.post('/client/update', (req, res) => {
    updateClient(req.body.user).then((e) => {
        console.log(e);
        res.end();
    }).catch(()=>res.end())
})

app.get('/getUsers', (req, res) => {
    fetchClients().then((clients) => {
        res.json(clients);
    }).catch(
        (e) =>  {console.log(e); res.end()}
    )
})