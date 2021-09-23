import React from 'react'
import { gettAllSportNews } from '../../service'
import { useState, useEffect } from 'react'
import './Sport.scss'


const Sport = () => {
    const [resultOfSearch,setResultOfSearch] = useState()
    const [search,setSearch] = useState('')
    const placeholder = 'https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png'
    const author_placeholder = 'FOCUS Online'
 
    useEffect(() => {
        gettAllSportNews().then(res => {
             //console.log(res.data)
             setResultOfSearch(res.data.data)
         })
    },[])
    return (
        <div>
         <input type='search' placeholder='Looking for a news...' onChange={(e) => {setSearch(e.target.value.toLowerCase())}} />
        <div className='card-main'>
            {
               search.length === 0 ? resultOfSearch?.filter((value) => value?.title.toLowerCase().includes(search)).map(({title,description,image,url,author,published_at}) => { 
                   return (
                    <div className='card' key={url}>
                        <h3>{title.slice(0,30)}...</h3>
                        <p>{author ? author : author_placeholder}</p>
                        <h4>{published_at.slice(0,10)}</h4>
                        <img src={image ? image : placeholder} alt={title} />
                        <h5>{description.slice(0,270) ? description.slice(0,270) : title}</h5>
                        <a className='a' href={url}>More...</a>
                    </div>
                   )})   : <h1>Match doesn't exist</h1>
            }
        </div>
        </div>
    )
}

export default Sport
