import React, { Component } from "react";
import NewsItem from "./NewsItem";

class News extends Component {
  constructor() {
    super();

    this.state = {
      articles: [],
      curPage: 1,
      totalResults: 0,
    };
  }
  
  async componentDidMount() {
    let url =
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=3fe7795c9cb44e92a502b51d276cbd7c&pageSize=20&page=${this.state.curPage}`;
    let data = await fetch(url);
    let mainData = await data.json();
    this.setState({
      articles: mainData.articles,
      totalResults: mainData.totalResults
    });
  }

  handlePrevPage = async () => {
    if (this.state.curPage != 1) {
      let url =
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=3fe7795c9cb44e92a502b51d276cbd7c&pageSize=20&page=${this.state.curPage-1}`;
      let data = await fetch(url);
      let mainData = await data.json();
      this.setState({
        curPage: this.state.curPage - 1,
        articles: mainData.articles,
      });
    }
  }
  
  handleNextPage = async () => {
    if(this.state.curPage < Math.ceil(this.state.totalResults/20)) {
      let url =
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=3fe7795c9cb44e92a502b51d276cbd7c&pageSize=20&page=${this.state.curPage+1}`;
      let data = await fetch(url);
      let mainData = await data.json();
      this.setState({
        curPage: this.state.curPage + 1,
        articles: mainData.articles,
      });
    }
  }

  render() {
    let { articles, totalResults } = this.state;
    let disabledStyle = {
      backgroundColor: 'gray',
      border: 0,
      color: 'white',
      cursor: 'not-allowed'
    }

    return (
      <>
        <div className="news-container">
          <h1>Today's Top Headlines...</h1>
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
            <button class="btn btn-primary" style={this.state.curPage===1?disabledStyle:null} onClick={this.handlePrevPage} >Prev</button>
            <div className="page">
              Page {this.state.curPage} of {Math.ceil(this.state.totalResults / 20)}
            </div>
            <button class="btn btn-primary" onClick={this.handleNextPage} style={this.state.curPage===Math.ceil(totalResults/20)?disabledStyle:null}>Next</button>
          </div>
        </div>
      </>
    );
  }
}

export default News;
