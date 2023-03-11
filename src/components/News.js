import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Loading from "./Loading";

class News extends Component {
  constructor() {
    super();

    this.state = {
      articles: [],
      curPage: 1,
      totalResults: 0,
      loading: true,
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
      articles: mainData.articles,
      totalResults: mainData.totalResults,
      loading: false
    });
  }
  
  handlePrevPage = async () => {
    if (this.state.curPage !== 1) {
      this.setState({
        curPage: this.state.curPage - 1,
        loading: true
      }, () => {
        window.scrollTo(0, 0);
        this.componentDidMount();
      });
    }
  };

  handleNextPage = async () => {
    if (this.state.curPage < Math.ceil(this.state.totalResults / this.state.pageSize)) {
      this.setState({
        curPage: this.state.curPage + 1,
        loading: true
      }, () => {
        window.scrollTo(0, 0);
        this.componentDidMount();
      })
    }
  };

  render() {
    let { articles, totalResults, curPage, loading } = this.state;
    let disabledStyle = {
      backgroundColor: "gray",
      border: 0,
      color: "white",
      cursor: "not-allowed",
    };
    let totalResultLogic = Math.ceil(totalResults / this.state.pageSize);

    return (
      <>
        <div className="news-container">
          <h1>{this.props.heading}...</h1>
          {loading?<Loading/>:null}
          <div className="news-item-container">
            {articles.map((article) => {
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
                  key={article.urlToImage}
                  date={article.publishedAt}
                />
              );
            })}
          </div>

          <div className="pagination-button">
            <button
              class="btn btn-primary"
              style={curPage === 1 ? disabledStyle : null}
              onClick={this.handlePrevPage}
            >
              Prev
            </button>
            <div className="page">
              Page {curPage} of {totalResultLogic}
            </div>
            <button
              class="btn btn-primary"
              onClick={this.handleNextPage}
              style={curPage === totalResultLogic ? disabledStyle : null}
            >
              Next
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default News;
