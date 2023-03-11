import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

class News extends Component {
  constructor() {
    super();

    this.state = {
      articles: [],
      curPage: 1,
      totalResults: 0,
      pageSize: 12,
      country: 'in',
    };
  }

  async componentDidMount() {
    let { curPage, pageSize, country } = this.state;
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=47f0f86a9b36401a892a186bad6bea42&pageSize=${pageSize}&page=${curPage}&category=${this.props.category}`;
    let data = await fetch(url);
    let mainData = await data.json();
    this.setState({
      articles: this.state.articles.concat(mainData.articles),
      totalResults: mainData.totalResults
    });
  }

  handleCaptializeChar = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  fetchMoreData = () => {
    this.setState({
      curPage: this.state.curPage + 1,
    }, () => {
      this.componentDidMount()
    });
  }

  render() {
    let titleCategory = this.handleCaptializeChar(this.props.category);
    document.title = titleCategory + ' - News Monkey';
    return (
      <>
        <div className="news-container">
          <h1>{this.props.heading}...</h1>
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length <= this.state.totalResults}
            loader={<Loading/>}
          >
          <div className="news-item-container">
            {this.state.articles.map((article, index) => {
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
}

export default News;
