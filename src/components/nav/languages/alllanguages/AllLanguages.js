import React from 'react'
import {getTopAllNews} from '../../../../service'
import { useState, useEffect } from 'react'
import './AllLanguages.scss'


const AllLanguages = () => {
    const [sourcesSport,setSourcesSport] = useState([])
    const placeholder = 'https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png'
    const author_placeholder = 'FOCUS Online'

 
    useEffect(() => {
        getTopAllNews().then(res => {
             //console.log(res.data)
            setSourcesSport(res.data.data)
         })
    },[])
    return (
        <div className='wrapper-all'>
            {
               sourcesSport?.map(({title,description,image,url,author,published_at}) => { 
                   return (
                    <div className='all-card' key={url}>
                    <h3>{title.slice(0,20)}...</h3>
                    <p>{author ? author : author_placeholder}</p>
                    <h4>{published_at.slice(0,10)}</h4>
                    <img src={image ? image : placeholder} alt={title} />
                    <h5>{description.slice(0,60) ? description.slice(0,60) : title}</h5>
                    <a href={url}>More...</a>
                    </div>
                   )}) 
            }
        </div>
    )

}

export default AllLanguages

