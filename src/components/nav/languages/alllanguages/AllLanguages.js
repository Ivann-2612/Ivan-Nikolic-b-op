import React from "react";
import { getAllNews } from "../../../../service";
import { useState, useEffect } from "react";
import "./AllLanguages.scss";

const AllLanguages = () => {
  const [sourcesSport, setSourcesSport] = useState([]);
  const [visible, setVisible] = useState(10);
  const [search, setSearch] = useState("");
  const placeholder =
    "https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png";
  const author_placeholder = "FOCUS Online";

  useEffect(() => {
    getAllNews().then((res) => {
      setSourcesSport(res.data.data);
    });
  }, []);

  const handleSearchOnChange = (e) => {
    setSearch(e.target.value);
  };

  const showMoreBlogs = () => {
    setVisible((prev) => prev + 5);
  };

  const sortedAsc = () => {
 sourcesSport.sort(function(a,b) {
      return new Date(b.published_at).getTime() - new Date(a.published_at).getTime()
    });
  };
  const sortedDesc = () => {
    console.log(setSourcesSport(sourcesSport));
  };
  // let isDescending = 1;
  // sourcesSport.sort((a, b) =>
  //   isDescending
  //     ? new Date(b.published_at).getTime() - new Date(a.published_at).getTime()
  //     : new Date(a.published_at).getTime() - new Date(b.published_at).getTime()
  // );

  return (
    <>
      <div>
        <input
          className="input"
          type="search"
          placeholder="Looking for a news..."
          onChange={handleSearchOnChange}
        />
        <button
          type="button"
          className="btn-asc"
          onClick={sortedAsc}
        >
          &#11205;
        </button>
        <button
          type="button"
          className="btn-desc"
          onClick={sortedDesc}
        >
          &#11206;
        </button>
      </div>
      <div className="wrapper-all">
      <marquee scrollamount='8'>The best news in the world</marquee>
        {sourcesSport
          ?.filter((value) => value?.title.toLowerCase().includes(search))
          .slice(0, visible)
          .map(
            ({
              title,
              description,
              image,
              url,
              author,
              published_at,
              language,
            }) => (
              <div className="all-card" key={url}>
                <h3>{title.slice(0, 20)}...</h3>
                <p>
                  {author || author_placeholder} &nbsp; &nbsp; &nbsp;Lang:{" "}
                  <span>{language}</span>
                </p>
                <h4>{published_at.slice(0, 10)}</h4>
                <img src={image || placeholder} alt={title} />
                <h5>{description.slice(0, 60) || title}</h5>
                <a target="_blank" rel="noreferrer" href={url}>
                  More &#187;
                </a>
              </div>
            )
          )}
        <button className="load-more-btn-tech" onClick={showMoreBlogs}>
          Load...
        </button>
      </div>
    </>
  );
};

export default AllLanguages;
