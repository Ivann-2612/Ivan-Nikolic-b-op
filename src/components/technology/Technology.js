import React from "react";
import { gettAllTechnologyNews } from "../../service";
import { useState, useEffect } from "react";
import "./Technology.scss";
import { TiArrowSortedDown } from "react-icons/ti";
import { TiArrowSortedUp } from "react-icons/ti";
import TechnologyLeftSide from "./TecnologyLeftSide";

const Technology = () => {
  const [resultOfSearch, setResultOfSearch] = useState();
  const [search, setSearch] = useState("");
  const [visible, setVisible] = useState(4);
  const placeholder =
    "https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png";
  const author_placeholder = "FOCUS Online";

  useEffect(() => {
    gettAllTechnologyNews().then((res) => {
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
    <div className="wrapper">
      <button className="btn-asc" onClick={() => sortedAsc()}>
        <TiArrowSortedDown />
      </button>
      <button className="btn-desc" onClick={() => sortedDesc()}>
        <TiArrowSortedUp />
      </button>
      <input
        type="search"
        placeholder="Looking for a news..."
        onChange={handleSearchOnChange}
      />
      <div>
        <h2>Technology column</h2>
      </div>
      <div className="right-side">
        <TechnologyLeftSide />
      </div>
      <div className="card-main">
        {resultOfSearch === 0 ? (
          <h1>Match doesn't exist</h1>
        ) : (
          resultOfSearch
            ?.filter((value) => value?.title.toLowerCase().includes(search))
            .slice(0, visible)
            .map(({ title, description, image, url, author, published_at }) => (
              <div className="card" key={url}>
                <img src={image || placeholder} alt={title} />
                <h3>{title}...</h3>
                <p>{author || author_placeholder}</p>
                <h4>{published_at.slice(0, 10)}</h4>
                <h5>{description || title}</h5>
                <a target="_blank" rel="noreferrer" className="a" href={url}>
                  More &#187;
                </a>
              </div>
            ))
        )}
      </div>
      <button className="load-more-btn-tech" onClick={showMoreBlogs}>
        Load...
      </button>
    </div>
  );
};

export default Technology;
