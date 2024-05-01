import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  const data = {
    nameLength: 0
  };
  res.render ("index.ejs", data);
});

app.post("/submit", (req, res) => {
  console.log(req.body);
  var fullName = req.body["fName"]+req.body["lName"];
  var length = fullName.length;
  const data = {
    nameLength: length
  };
  console.log(fullName, length, data);
  res.render ("index.ejs", data);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
