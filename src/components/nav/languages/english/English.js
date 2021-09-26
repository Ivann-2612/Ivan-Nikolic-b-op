import React from "react";
import { getTopEnNews } from "../../../../service";
import { useState, useEffect } from "react";
import "./English.scss";

const English = () => {
  const [sourcesSport, setSourcesSport] = useState([]);
  const [visible, setVisible] = useState(10);
  const [resultOfSearch, setResultOfSearch] = useState();
  const [search, setSearch] = useState("");
  const placeholder =
    "https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png";
  const author_placeholder = "FOCUS Online";

  useEffect(() => {
    getTopEnNews().then((res) => {
      setSourcesSport(res.data.data);
      setResultOfSearch(res.data.data);
    });
  }, []);

  const showMoreBlogs = () => {
    setVisible((prev) => prev + 5);
  };

  const array = sourcesSport.map((el) =>
    new Date(el.published_at).toJSON().slice(0, 10).replace(/-/g, "/")
  );

  const sortedAsc = () => {
    const sort = array.sort((a, b) => a.published_at - b.published_at);
    return sort;
  };
  const sortedDesc = () => {
    const sort = array.sort((a, b) => b.published_at - a.published_at);
    return sort;
  };
  const handleSearchOnChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <>
      <div>
        <input
          className="input"
          type="search"
          placeholder="Looking for a news..."
          onChange={handleSearchOnChange}
        />
        <button className="btn-asc" onClick={sortedAsc}>
          &#11206;
        </button>
        <button className="btn-desc" onClick={sortedDesc}>
          &#11205;
        </button>
      </div>
      <div className="wrapper-en">
        {resultOfSearch
          ?.filter((value) => value?.title.toLowerCase().includes(search))
          .slice(0, visible)
          .map(({ title, description, image, url, author, published_at }) => (
            <div className="en-card" key={url}>
              <h3>{title.slice(0, 20)}...</h3>
              <p>{author || author_placeholder}</p>
              <h4>{published_at.slice(0, 10)}</h4>
              <img src={image || placeholder} alt={title} />
              <h5>{description.slice(0, 60) || title}</h5>
              <a target="_blank" rel="noreferrer" href={url}>
                More &#187;
              </a>
            </div>
          ))}
        <button className="load-more-btn-tech" onClick={showMoreBlogs}>
          Load...
        </button>
      </div>
    </>
  );
};

export default English;
