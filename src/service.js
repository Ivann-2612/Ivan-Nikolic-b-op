import axios from "axios";

const KEY = "c07786a16a0e1c9623b2e660ae73d6e8";

const ALL_TECHNOLOGY_NEWS = `http://api.mediastack.com/v1/news?access_key=${KEY}&categories=technology`;
const ALL_SPORT_NEWS = `http://api.mediastack.com/v1/news?access_key=${KEY}&categories=sports`;

const TOP_NEWS_EN = `http://api.mediastack.com/v1/news?access_key=${KEY}&categories=sports, technology&languages= -de,es,fr,it,en,nl`;
const TOP_NEWS_ALL = `http://api.mediastack.com/v1/news?access_key=${KEY}&categories=sports, technology&country= en `;

export const gettAllTechnologyNews = () => {
  return axios.get(ALL_TECHNOLOGY_NEWS);
};
export const gettAllSportNews = () => {
  return axios.get(ALL_SPORT_NEWS);
};
export const getTopEnNews = () => {
  return axios.get(TOP_NEWS_EN);
};

export const getAllNews = () => {
  return axios.get(TOP_NEWS_ALL);
};
