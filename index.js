let express = require("express");
let cors = require("cors");
let { MongoClient } = require("mongodb");
const app = express();
app.use(cors());
app.use(express.json());
app.post("/save", (req, res) => {
  const url = "mongodb://0.0.0.0:27017";
  const client = new MongoClient(url);
  const db = client.db("ss22oct23");
  const coll = db.collection("student");
  const record = {
    name: req.body.name,
    company: req.body.company,
    pkg: req.body.pkg,
  };
  coll
    .insertOne(record)
    .then((result) => res.send(result))
    .catch((err) => res.send(err));
});
app.listen(9001, () => console.log("ready to work"));
