import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {
  const handleCaptializeChar = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  let titleCategory = handleCaptializeChar(props.category);
  document.title = titleCategory + ' - News Monkey';

  const pageSize = 12;
  const country = 'in';
  const [curPage, setCurPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [articles, setArticles] = useState([]);


  const updateNews = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${props.apiKey}&pageSize=${pageSize}&page=${curPage}&category=${props.category}`;
    let data = await fetch(url);
    let mainData = await data.json();
    setArticles(articles.concat(mainData.articles));
    setTotalResults(mainData.totalResults);
  }

  const fetchMoreData = () => {
    setCurPage(curPage + 1);
    updateNews();
  }

  useEffect(() => {
    updateNews();
  }, []);

  return (
    <>
      <div className="news-container">
        <h1>{props.heading}...</h1>
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length <= totalResults}
          loader={<Loading/>}
        >
        <div className="news-item-container">
          {articles.map((article, index) => {
            return (
              <NewsItem
                title={article.title.slice(0, 50)}
                description={
                  article.description
                    ? article.description.slice(0, 80)
                    : "Click on Read more to know more about this News"
                }
                urlToImage={article.urlToImage}
                url={article.url}
                sourceID={article.source.id}
                key={index}
                date={article.publishedAt}
                by={article.source.name}
              />
            );
          })}
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
}