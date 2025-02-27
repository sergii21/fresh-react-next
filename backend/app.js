import bodyParser from "body-parser";
import express from "express";

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(express.static("public"));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/a", (req, res) => {
  res.send("GET request to the homepage");
});

app.get("/", (req, res) => res.send("Hello World1!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
