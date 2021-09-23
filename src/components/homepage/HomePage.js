import React from 'react'
import './HomePage.scss'
import Category from '../categories/Category'
import News from '../../img/news.jpg'




const HomePage = () => {
   
    
    return (
        <div className='homepage'> 
            <Category />
            {/* <div>
              <h2>Technology News from around the world</h2>
            <img className='hmp-img' src={News} alt='news' />  
            </div> */}
            
        </div> 
 
    )
    }
export default HomePage
