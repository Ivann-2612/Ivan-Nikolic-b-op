import axios from 'axios'

const KEY = '43a4d7553f56245b96fc070d6b777809'
// c27280d79ef611f61af7059d96f7f614
const ALL_TECHNOLOGY_NEWS = `https://api.mediastack.com/v1/news?access_key=${KEY}&categories=technology`
const ALL_SPORT_NEWS = `https://api.mediastack.com/v1/news?access_key=${KEY}&categories=sports`

const TOP_NEWS_EN = `https://api.mediastack.com/v1/news?access_key=${KEY}&categories=sports, technology&languages= -de,es,fr,it,en,nl`
const TOP_NEWS_ALL = `https://api.mediastack.com/v1/news?access_key=${KEY}&categories=sports, technology&country= en `




export const gettAllTechnologyNews = () => {
    return axios.get(ALL_TECHNOLOGY_NEWS)
}
export const gettAllSportNews = () => {
    return axios.get(ALL_SPORT_NEWS)
}
export const getTopEnNews = () =>  {
    return axios.get(TOP_NEWS_EN)
}

export const getAllNews = () =>  {
    return axios.get(TOP_NEWS_ALL)
}
