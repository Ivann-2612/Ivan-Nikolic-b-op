import React from "react";
import "./HomePage.scss";
import Category from "../categories/Category";

const HomePage = () => {
  return (
    <div className="homepage">
       <img className="logo" src='https://cdn.worldvectorlogo.com/logos/daily-news.svg' />
       <h5> F <br />R <br />E <br />S <br />H <br /> <br />N <br />E <br />W <br />S <br /> <br />E <br />V <br />E <br /> R <br />Y <br /><br />D <br />A <br/>Y</h5>
      <Category />
    </div>
  );
};
export default HomePage;
