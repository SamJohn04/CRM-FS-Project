const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb://127.0.0.1:27017";

const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });
  async function run() {
    try {
      // Connect the client to the server	(optional starting in v4.7)
      await client.connect();
      // Send a ping to confirm a successful connection
      await client.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }

  const getId = async () => {
    let uID = 1;
    try {
      await client.connect();
      const collection = client.db('crm').collection('clients')
      const res = await collection.find();
      for await (const doc of res) {
        if(doc.uID && doc.uID >= uID)
          uID = doc.uID+1;
          console.log
      }
      return uID;
    }
    catch(e) {
      console.log(e)
    }
    finally {
      await client.close();
    }
  }

  const addClient = async (clientInfo) => {
    try {
      await client.connect();
      const collection = client.db('crm').collection('clients')
      const response = await collection.insertOne(clientInfo)
      await client.close()
      return response;
    }
    catch(e) {
      console.log(e)
    }
    finally {
      await client.close();
    }
  }

  const fetchClients = async () => {
    try {
      await client.connect();
      const collection = client.db('crm').collection('clients')
      const response = await collection.find();
      const docs = [];
      for await (const doc of response) {
        docs.push(doc);
      }
      await client.close()
      return docs;
    }
    catch(e) {
      console.log(e)
    }
    finally {
      await client.close();
    }
  }

  const deleteClient = async (uID) => {
    try {
      await client.connect();
      const collection = client.db('crm').collection('clients')
      console.log(uID)
      const response = await collection.deleteOne({uID: uID})
      await client.close()
      return response
    }
    catch(e) {
      console.log(e)
    }
    finally {
      await client.close();
    }
  }

  const updateClient = async (user) => {
    try {
      await client.connect();
      const collection = client.db('crm').collection('clients')
      const response = await collection.updateOne({uID: user.uID}, 
        {
          $set: {
            name: user.name,
            phoneNumber: user.phoneNumber,
            email: user.email,
            clientHistory: user.clientHistory,
        }
      })
      await client.close()
      return response;
    }
    catch(e) {
      console.log(e)
    }
    finally {
      await client.close()
    }
  }

  module.exports = {addClient, getId, fetchClients, deleteClient, updateClient}