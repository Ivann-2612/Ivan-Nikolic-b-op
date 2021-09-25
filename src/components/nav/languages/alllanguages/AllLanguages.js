import React from 'react'
import {getAllNews} from '../../../../service'
import { useState, useEffect } from 'react'
import './AllLanguages.scss'


const AllLanguages = () => {
    const [sourcesSport,setSourcesSport] = useState([])
    const [visible,setVisible] = useState(10)
    const [resultOfSearch,setResultOfSearch] = useState()
    const [search,setSearch] = useState('')
    const placeholder = 'https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png'
    const author_placeholder = 'FOCUS Online'

 
    useEffect(() => {
        getAllNews().then(res => {
             //console.log(res.data.data)
            setSourcesSport(res.data.data)
            setResultOfSearch(res.data.data)
            
         })
    },[])

    const showMoreBlogs = () => {
        setVisible(prev => prev + 5)
    }
    const array = sourcesSport.map(el => new Date(el.published_at).toJSON().slice(0,10).replace(/-/g,'/'));

    const sortedAsc = () => {
     const sort = array.sort((a,b) => a - b, 0)
     console.log(sort);
    }
    const sortedDesc = () => {
        const sort = array.sort((a,b) => b - a, 0)
        console.log(sort);
       }

    return (
        <>
        <div>
        <input className='input' type='search' placeholder='Looking for a news...' onChange={(e) => {setSearch(e.target.value.toLowerCase())}} />
        <button className='btn-asc' onClick={() => sortedAsc()}>&#11206;</button>
        <button className='btn-desc' onClick={() => sortedDesc()}>&#11205;</button>

        </div>
        <div className='wrapper-all'>
            {
               resultOfSearch?.filter((value) => value?.title.toLowerCase().includes(search)).slice(0,visible).map(({title,description,image,url,author,published_at,language}) => { 
                   return (
                    <div className='all-card' key={url}>
                    <h3>{title.slice(0,20)}...</h3>
                    <p>{author ? author : author_placeholder}  &nbsp; &nbsp; &nbsp;Lang: <span>{language}</span></p>
                    <h4>{published_at.slice(0,10)}</h4>
                    <img src={image ? image : placeholder} alt={title} />
                    <h5>{description.slice(0,60) ? description.slice(0,60) : title}</h5>
                    <a target="_blank"  rel="noreferrer" href={url}>More &#187;</a>
                    </div>
                   )}) 
            }
                    <button className='load-more-btn-tech' onClick={showMoreBlogs}>Load...</button>

        </div>
        </>
    )

}

export default AllLanguages

