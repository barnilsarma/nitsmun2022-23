import React, { useState, useEffect } from "react";
import "./articles.css";
import ReactReadMoreReadLess from "react-read-more-read-less";
import { TabTitle } from "../Utils/Genfn";
import { Articledata } from "../Dataset";
import Underline3 from "../Underline/Underline3";
import Loading from "../Loading";
const Articles = () => {
  TabTitle("Articles | NITS MUN");
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    setTimeout(function () {
      setIsFetching(false);
    }, 200);
  }, []);

  if (isFetching) {
    return <Loading />;
  }
  return (
    <>
      <div className="articles-heading-cont">
        <h1>Articles</h1>
      </div>
      <div className="article-main-content">
        <div className="last-up">
          <h5>Last Updated : 23<sup>rd</sup> Aug, 2022</h5>
        </div>
        {Articledata.map((item) => {
          return (
            <div className="article-container" key={item.id}>
              <div className="article-content">
                <h1>{item.Title}</h1>
              </div>
              <div className="article-flexing">
                <div className="img-holder">
                  <img src={item.Artimg} alt={item.Alt} />
                </div>
                <div className="content-holder">
                  <div className="post-date">
                    <h3>{item.Date}</h3>
                  </div>
                  <div className="article-cont1">
                    <ReactReadMoreReadLess
                      charLimit={500}
                      readMoreText={
                        <button className="read-more-btn">Read More</button>
                      }
                      readLessText={
                        <button className="read-less-btn">Show Less</button>
                      }
                    >
                      {item.Content}
                    </ReactReadMoreReadLess>
                  </div>
                </div>
              </div>
              <Underline3 />
            </div>
          );
        })}
      </div>
      <div className="art-art-title">
        <h1 className="apply-art-h1">
          Check Out{" "}
          <a
            href="https://instagram.com/nitsmun"
            rel="noreferrer"
            target="_blank"
          >
            @nitsmun
          </a>{" "}
          For All Our Articles!
        </h1>
      </div>
    </>
  );
};
export default Articles;
