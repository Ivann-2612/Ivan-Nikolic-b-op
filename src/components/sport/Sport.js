import React from "react";
import { gettAllSportNews } from "../../service";
import { useState, useEffect } from "react";
import "./Sport.scss";
import { TiArrowSortedDown } from "react-icons/ti";
import { TiArrowSortedUp } from "react-icons/ti";
import SportLeftSide from "./SportLeftSide";

const Sport = () => {
  const [resultOfSearch, setResultOfSearch] = useState();
  const [search, setSearch] = useState("");
  const [visible, setVisible] = useState(4);

  const placeholder =
    "https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png";
  const author_placeholder = "FOCUS Online";

  useEffect(() => {
    gettAllSportNews().then((res) => {
      setResultOfSearch(res.data.data);
    });
  }, []);

  const showMoreBlogs = () => {
    setVisible((prev) => prev + 4);
  };

  const sortedAsc = () => {
    resultOfSearch.sort((a, b) => a - b);
  };
  const sortedDesc = () => {
    resultOfSearch.sort((a, b) => b - a);
  };
  const handleSearchOnChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <button className="btn-asc" onClick={() => sortedAsc()}>
        <TiArrowSortedDown size={25} color="white" />
      </button>
      <button className="btn-desc" onClick={() => sortedDesc()}>
        <TiArrowSortedUp size={25} color="white" />
      </button>
      <input
        type="search"
        placeholder="Looking for a news..."
        onChange={handleSearchOnChange}
      />
      <div>
        <h2>Sport column</h2>
      </div>
      <div className="right-side">
        <SportLeftSide />
      </div>

      <div className="card-main">
        {resultOfSearch
          ?.filter((value) => value?.title.toLowerCase().includes(search))
          .slice(0, visible)
          .map(({ title, description, image, url, author, published_at }) => (
            <div className="card" key={url}>
              <img
                src={image || placeholder}
                alt={title}
              />
              <h3>{title.slice(0, 70)}...</h3>
              <p>{author || author_placeholder}</p>
              <h4>{published_at.slice(0, 10)}</h4>
              <h6>{description.slice(0, 330) || title}</h6>
              <a target="_blank" rel="noreferrer" className="a" href={url}>
                More &#187;
              </a>
            </div>
          ))}
      </div>
      <div>
        <button type="button" className="load-more-btn" onClick={showMoreBlogs}>
          Load..
        </button>
      </div>
    </div>
  );
};

export default Sport;
