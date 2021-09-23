import React from 'react'
import './Category.scss'
import Sport from '../sport/Sport'
import Technology from '../technology/Technology'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"


const Category = () => {
    
   
    return (
      <>
        <Router>
          <div className='category'>
            <Link to={'/sport'}>Sport</Link>
            <Link to={'/technology'}>Technology</Link>
            <Switch>
          
            <Route exact path="/sport">
              <Sport />
            </Route> 
           
            <Route exact path="/technology">
              <Technology />
            </Route>             
        </Switch>
        </div>
        </Router>
        
        </>
    )
}

export default Category
