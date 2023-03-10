import React, { Component } from "react";
import NewsItem from "./NewsItem";

class News extends Component {
  constructor() {
    super();

    this.state = {
      articles: [],
    };
  }
  //
  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=0b3e173754f848b690c441225e140e9d";
    let data = await fetch(url);
    let mainData = await data.json();
    this.setState({
      articles: mainData.articles,
    });
  }

  render() {
    let { articles } = this.state;
    return (
      <>
        <div className="news-container">
          <h1>Today's Top Headlines...</h1>
          <div className="news-item-container">
            {articles.map((article) => {
              return (
                <NewsItem
                  title={article.title.slice(0, 55)}
                  description={
                    article.description
                      ? article.description.slice(0, 80)
                      : "Click on Read more to know more about this News"
                  }
                  urlToImage={article.urlToImage}
                  url={article.url}
                  sourceID={article.source.id}
                  key={article.urlToImage}
                />
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default News;
