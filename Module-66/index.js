const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())

const obj = [
  {
    id: 1,
    name: "fahmida fahmi",
    email: 'fahmi@gads.com',
  },
  { 
    id:2,
    name: "shakib",
    email: 'shakib@dsfcom.com',
  },
  {
    id:3,
    name: 'zuwel',
    email: 'zuwel56@.com'
  },
  {
    id: 4,
    name:'shamima',
    email: 'shamima45@dafd.com'

  }
];

app.get("/", (req, res) => {
  res.send("app is running");
});

app.get('/users', (req,res) =>{
    res.send(obj)
})

app.post('/users', (req,res) =>{
  console.log('post api is hitting');
  console.log(req.body);
  const newUser = req.body
  newUser.id = obj.length + 1
  obj.push(newUser)
  console.log(newUser);
})

app.listen(port, () => {
  console.log(`this is port ${5000}`);
});
