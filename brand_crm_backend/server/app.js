const express = require('express')
const app = express()

const { client } = require('./api/utility')

const cors = require('cors')
app.use(cors())

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.listen(8080, () => {console.log('connected! Hello World!');})

app.post('/client/add', (req, res) => {
    client.add(req.body).then(() => res.end())
})

app.post('/client/delete', (req, res) => {
    client.delete(req.body).then(() => {
        res.end();
    }).catch(() => res.end())
})

app.post('/client/update', (req, res) => {
    client.update().then(() => {
        res.end();
    }).catch(()=>res.end())
})

app.post('/client/message/add', (req, res) => {
    client.message.add(req.body).then(() => {
        res.end();
    }).catch(()=>res.end())
})

app.get('/client', (req, res) => {
        client.get()
        .then((result) => res.json(result))
        .catch(res.end)
})