const express = require("express");
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const cors = require("cors");
const port = process.env.PORT || 4000;
const app = express();
const saslprep = require("saslprep");

// saslprep('password\u00AD') // password
// saslprep('password\u0007') // Error: prohibited character
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.cmyv688.mongodb.net/?retryWrites=true&w=majority`;

console.log(uri);
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)

    const database = client.db("chocolateDb").collection("chocolates");

    app.get("/chocolate", async (req, res) => {
      const cursor = database.find();
      const query = await cursor.toArray();
      res.send(query);
    });

    app.post("/chocolate", async (req, res) => {
      const chocolate = req.body;
      console.log(chocolate);
      const result = await database.insertOne(chocolate);
      res.send(result);
    });

    app.get("/chocolate/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await database.findOne(query);
      res.send(result);
    });

    app.put("/chocolate/:id", async (req, res) => {
      const chocolate = req.body;
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updateChocolate = {
        $set: {
          name: chocolate.name,
          country: chocolate.country,
          category: chocolate.category,
        },
      };
      const result = await database.updateOne(filter, updateChocolate, options);
      res.send(result);
    });

    app.delete('/chocolate/:id', async(req,res) =>{
      const id = req.params.id 
      const query = { _id: new ObjectId(id)}
      const result = await database.deleteOne(query)
      res.send(result)
    })

    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("This is running with funning");
});

app.listen(port, () => {
  console.log(`This server is running in ${port}`);
});
