const express = require("express");

const router = express.Router();

const { getNewsCategoryWise } = require("../services");

// api to get main news + recent news.
router.get("/general/:page?", async (req, res) => {
  try {
    const page = req.params.page;
    const { getNewsList } = require("../services");
    const newsList = await getNewsList(page);
    return res.send(newsList);
  } catch (error) {
    return res.status(404).send("No Data Found");
  }
});

// api to get science related news.
router.get("/science/:page?", async (req, res) => {
  try {
    const page = req.params.page;
    const newsList = await getNewsCategoryWise(page, "science");
    return res.send(newsList);
  } catch (error) {
    return res.status(404).send("No Data Found");
  }
});

// api to get science related news.
router.get("/business/:page?", async (req, res) => {
  try {
    const page = req.params.page;
    const newsList = await getNewsCategoryWise(page, "business");
    return res.send(newsList);
  } catch (error) {
    return res.status(404).send("No Data Found");
  }
});

// api to get science related news.
router.get("/sports/:page?", async (req, res) => {
  try {
    const page = req.params.page;
    const newsList = await getNewsCategoryWise(page, "sports");
    return res.send(newsList);
  } catch (error) {
    return res.status(404).send("No Data Found");
  }
});

// api to get science related news.
router.get("/health/:page?", async (req, res) => {
  try {
    const page = req.params.page;
    const newsList = await getNewsCategoryWise(page, "health");
    return res.send(newsList);
  } catch (error) {
    return res.status(404).send("No Data Found");
  }
});

module.exports = router;
