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
      pageSize: 18,
    };
  }

  async componentDidMount() {
    let { curPage, pageSize } = this.state;
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=3fe7795c9cb44e92a502b51d276cbd7c&pageSize=${pageSize}&page=${curPage}`;
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
    if (this.state.curPage < Math.ceil(this.state.totalResults / 18)) {
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
    let totalResultLogic = Math.ceil(totalResults / 18);

    return (
      <>
        <div className="news-container">
          <h1>Today's Top Headlines...</h1>
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
