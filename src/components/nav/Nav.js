import React from 'react'
import './Nav.scss'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"
import HomePage from '../homepage/HomePage'
import English from '../nav/languages/english/English'
import AllLanguages from '../nav/languages/alllanguages/AllLanguages'

const Nav = () => {
    
    return (
        <Router>
           <nav>
             <ul>
                     <li><Link to="/">Homepage</Link></li>
                 <div className='countries'>
                     <li><Link to='/alllanguages'>All</Link></li>
                     <li><Link to='/English'>EN</Link></li>
                 </div>
             </ul>
           </nav> 

           <Switch>
           <Route path="/English">
              <English />
            </Route>
            <Route path="/alllanguages">
              <AllLanguages />
            </Route>
             <Route exact render={() => <HomePage />} />
           </Switch>
        </Router>
    )
}

export default Nav
