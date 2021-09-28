import React from "react";
import { gettAllTechnologyNews } from "../../service";
import { useState, useEffect } from "react";
import "./TechnologyRightSide.scss";

const TechnologyRightSide = () => {
  const [events, setEvents] = useState([]);
  const [margins, setMargins] = useState([2, 3]);

  const placeholder =
    "https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png";
  const author_placeholder = "FOCUS Online";

  useEffect(() => {
    let isSubscribed = true;
    gettAllTechnologyNews().then((res) => {
      setEvents(res.data.data);
    });
  }, []);

  return (
    <div className="card-main-right">
      {events
        .slice(margins[2], margins[3])
        .map(({ title, image, url, author }) => (
          <div className="card-right" key={url}>
             <span>Latest news</span>
            <img src={image || placeholder} alt={title} />
            <h3>{title.slice(0, 40)}...</h3>
            <p>{author || author_placeholder}</p> 
            <a target="_blank" rel="noreferrer" className="a-left" href={url}>
              More &#187;
            </a>
          </div>
        ))}
    </div>
  );
};

export default TechnologyRightSide;
