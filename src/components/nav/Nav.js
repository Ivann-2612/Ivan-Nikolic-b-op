import React from "react";
import "./Nav.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "../homepage/HomePage";
import English from "../nav/languages/english/English";
import AllLanguages from "../nav/languages/alllanguages/AllLanguages";
import { AiOutlineHome } from "react-icons/ai";

const Nav = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link className="home" to="/">
              <AiOutlineHome
                style={{ marginTop: "-5px", marginLeft: "-40px" }}
                size={30}
              />
            </Link>
          </li>
         
          <div className="countries">
            <li>
              <Link to="/alllanguages">DE</Link>
            </li>
            <li>
              <Link to="/English">EN</Link>
            </li>
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
  );
};

export default Nav;
