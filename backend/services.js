const axios = require("axios");

const getNewsList = async () => {
  const url =
    "https://newsapi.org/v2/top-headlines?country=in&apiKey=946861aac63e4e35850b17231ea8e9c0";
  const newsList = await axios.get(url);
  return newsList.data;
};

const getScienceNewsList = async () => {
  const url =
    "https://newsapi.org/v2/top-headlines?category=science&country=in&apiKey=946861aac63e4e35850b17231ea8e9c0";
  const newsList = await axios.get(url);
  return newsList.data;
};

const getBusinessNewsList = async () => {
  const url =
    "https://newsapi.org/v2/top-headlines?category=business&country=in&apiKey=946861aac63e4e35850b17231ea8e9c0";
  const newsList = await axios.get(url);
  return newsList.data;
};

const getSportsNewsList = async () => {
  const url =
    "https://newsapi.org/v2/top-headlines?category=business&country=in&apiKey=946861aac63e4e35850b17231ea8e9c0";
  const newsList = await axios.get(url);
  return newsList.data;
};

const getHealthNewsList = async () => {
  const url =
    "https://newsapi.org/v2/top-headlines?category=business&country=in&apiKey=946861aac63e4e35850b17231ea8e9c0";
  const newsList = await axios.get(url);
  return newsList.data;
};

module.exports = {
  getNewsList,
  getScienceNewsList,
  getBusinessNewsList,
  getSportsNewsList,
  getHealthNewsList,
};
