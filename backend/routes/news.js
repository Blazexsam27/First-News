const express = require("express");

const router = express.Router();

// api to get main news + recent news.
router.get("/general", async (req, res) => {
  const { getNewsList } = require("../services");
  const newsList = await getNewsList();
  return res.send(newsList);
});

// api to get science related news.
router.get("/science", async (req, res) => {
  const { getScienceNewsList } = require("../services");
  const newsList = await getScienceNewsList();
  return res.send(newsList);
});

// api to get science related news.
router.get("/business", async (req, res) => {
  const { getBusinessNewsList } = require("../services");
  const newsList = await getBusinessNewsList();
  return res.send(newsList);
});

// api to get science related news.
router.get("/sports", async (req, res) => {
  const { getSportsNewsList } = require("../services");
  const newsList = await getSportsNewsList();
  return res.send(newsList);
});

// api to get science related news.
router.get("/health", async (req, res) => {
  const { getHealthNewsList } = require("../services");
  const newsList = await getHealthNewsList();
  return res.send(newsList);
});

module.exports = router;
