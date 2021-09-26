import React from "react";
import { gettAllTechnologyNews } from "../../service";
import { useState, useEffect } from "react";
import "./TechnologyLeftSide.scss";

const TechnologyLeftSide = () => {
  const [events, setEvents] = useState([]);
  const [margins, setMargins] = useState([0, 1]);

  const placeholder =
    "https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png";
  const author_placeholder = "FOCUS Online";

  useEffect(() => {
    let isSubscribed = true;
    gettAllTechnologyNews().then((res) => {
      if (isSubscribed) setEvents(res.data.data);

      setTimeout(() => {
        setMargins((prev) => {
          if (prev[0] === events.length - 1) return [0, 1];
          else {
            return [prev[0] + 1, prev[1] + 1];
          }
        });
      }, 8000);
    });
    return () => (isSubscribed = false);
  }, [margins]);

  return (
    <div className="card-main-left">
      {events
        .slice(margins[0], margins[1])
        .map(({ title, image, url, author }) => (
          <div className="card-left" key={url}>
            <img src={image || placeholder} alt={title} />
            <p>{author || author_placeholder}</p> <br />
            <h3>{title.slice(0, 70)}...</h3>
            <a target="_blank" rel="noreferrer" className="a-left" href={url}>
              More &#187;
            </a>
          </div>
        ))}
    </div>
  );
};

export default TechnologyLeftSide;
