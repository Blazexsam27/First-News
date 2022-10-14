const express = require("express");
const axios = require("axios");
const router = express.Router();

// api to get trending news.
router.get("", async (req, res) => {
  const newsList = await axios.get(
    "https://jsonplaceholder.typicode.com/todos/1"
  );
  return res.send(newsList.data);
});

module.exports = router;
