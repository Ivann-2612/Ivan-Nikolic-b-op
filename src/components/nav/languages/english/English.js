import React from 'react'
import {getTopEnNews} from '../../../../service'
import { useState, useEffect } from 'react'
import './English.scss'


const English = () => {
    const [sourcesSport,setSourcesSport] = useState([])
    const [visible,setVisible] = useState(10)

    const placeholder = 'https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png'
    const author_placeholder = 'FOCUS Online'

 
    useEffect(() => {
        getTopEnNews().then(res => {
             //console.log(res.data)
             setSourcesSport(res.data.data)
         })
    },[])

    const showMoreBlogs = () => {
        setVisible(prev => prev + 5)
    }

    let oneNewsArray = sourcesSport?.filter(el => el.language === 'en')
    
    console.log(oneNewsArray);
    return (
        <div className='wrapper-en'>
            {
               oneNewsArray?.slice(0,visible).map(({title,description,image,url,author,published_at}) => { 
                   return (
                    <div className='en-card' key={url}>
                     <h3>{title.slice(0,20)}...</h3>
                    <p>{author ? author : author_placeholder}</p>
                    <h4>{published_at.slice(0,10)}</h4>
                    <img src={image ? image : placeholder} alt={title} />
                    <h5>{description.slice(0,60) ? description.slice(0,60) : title}</h5>
                    <a href={url}>More...</a>
                    </div>
                   )}) 
            }
             <button className='load-more-btn-tech' onClick={showMoreBlogs}>Load...</button>
        </div>
    )

}

export default English
