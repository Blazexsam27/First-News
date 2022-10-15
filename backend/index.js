const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.send("Welcome to Backend");
});

app.listen(port, () => {
  console.log(`Server is Listening at port: ${port}`);
});

app.use("/api/news", require("./routes/news"));
