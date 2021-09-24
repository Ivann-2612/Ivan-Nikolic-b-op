import React from 'react'
import { gettAllSportNews } from '../../service'
import { useState, useEffect } from 'react'
import './Sport.scss'


const Sport = () => {
    const [resultOfSearch,setResultOfSearch] = useState()
    const [search,setSearch] = useState('')
    const [visible,setVisible] = useState(4)
    const placeholder = 'https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png'
    const author_placeholder = 'FOCUS Online'
 
    useEffect(() => {
        gettAllSportNews().then(res => {
             //console.log(res.data)
             setResultOfSearch(res.data.data)
         })
    },[])

    const showMoreBlogs = () => {
        setVisible(prev => prev + 4)
    }
   
    return (
        <div>
         <input type='search' placeholder='Looking for a news...' onChange={(e) => {setSearch(e.target.value.toLowerCase())}} />
        <div><h2>Sport column</h2></div>
        <div className='card-main'>
            {
             resultOfSearch?.filter((value) => value?.title.toLowerCase().includes(search)).slice(0,visible).map(({title,description,image,url,author,published_at}) => { 
                   return (
                    <div className='card' key={url}>
                        <h3>{title.slice(0,70)}...</h3>
                        <p>{author ? author : author_placeholder}</p>
                        <h4>{published_at.slice(0,10)}</h4>
                        <img src={image ? image : placeholder} alt={title} />
                        <h5>{description.slice(0,330) ? description.slice(0,330) : title}</h5>
                        <a className='a' href={url}>More...</a>
                    </div>
                   )}) 
            }
            
        </div>
        <button type='button' className='load-more-btn' onClick={showMoreBlogs}>Load..</button>
        </div>
    )
}

export default Sport
