const axios = require("axios");

const getNewsList = async (page) => {
  const url = page
    ? "https://newsapi.org/v2/top-headlines?country=in&apiKey=946861aac63e4e35850b17231ea8e9c0"
    : `https://newsapi.org/v2/top-headlines?country=in&page=${page}&apiKey=946861aac63e4e35850b17231ea8e9c0`;
  const newsList = await axios.get(url);
  return newsList.data;
};

const getNewsCategoryWise = async (page, category) => {
  const url = page
    ? `https://newsapi.org/v2/top-headlines?category=${category}&country=in&page=${page}&apiKey=946861aac63e4e35850b17231ea8e9c0`
    : `https://newsapi.org/v2/top-headlines?category=${category}&country=in&apiKey=946861aac63e4e35850b17231ea8e9c0`;
  const newsList = await axios.get(url);
  return newsList.data;
};

module.exports = {
  getNewsList,
  getNewsCategoryWise,
};
