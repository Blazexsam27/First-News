const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.send("Welcome to Backend");
});

app.listen(8000, () => {
  console.log("Hello From The Server");
});

app.use("/api/news", require("./routes/news"));
