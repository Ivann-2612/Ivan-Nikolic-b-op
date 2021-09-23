import axios from 'axios'

const KEY = 'c27280d79ef611f61af7059d96f7f614'

const ALL_TECHNOLOGY_NEWS = `http://api.mediastack.com/v1/news?access_key=${KEY}&categories=technology`
const ALL_SPORT_NEWS = `http://api.mediastack.com/v1/news?access_key=${KEY}&categories=sports`

const TOP_NEWS_EN = `http://api.mediastack.com/v1/news?access_key=${KEY}&categories=sports, technology&languages=en`
const TOP_NEWS_ALL = `http://api.mediastack.com/v1/news?access_key=${KEY}&categories=sports, technology&languages=de, es, fr, it, en, nl`




export const gettAllTechnologyNews = () => {
    return axios.get(ALL_TECHNOLOGY_NEWS)
}
export const gettAllSportNews = () => {
    return axios.get(ALL_SPORT_NEWS)
}
export const getTopEnNews = () =>  {
    return axios.get(TOP_NEWS_EN)
}

export const getTopAllNews = () =>  {
    return axios.get(TOP_NEWS_ALL)
}
