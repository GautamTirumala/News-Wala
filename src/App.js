import React, { Component } from 'react';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import NewsItem from './Components/NewsItem';
//import Data from './Components/Data';

class App extends Component {



  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
      disableNext:false,

    };
  }




  componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=6f7eb16038f74e96a3a9cb87132b5f14&page=1&pageSize=20`
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({ articles: data.articles, totalResults: data.totalResults });
        console.log(data);

      });
  }



  handelPreviousClick = () => {
    this.setState({ page: this.state.page - 1 })
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=6f7eb16038f74e96a3a9cb87132b5f14&page= ${this.state.page - 1}&pageSize=20`
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({ articles: data.articles })
        console.log(this.state.page);
      });
  }



  handelNextClick = () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
      
    }
    else {
      this.setState({ page: this.state.page + 1 })
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=6f7eb16038f74e96a3a9cb87132b5f14&page= ${this.state.page + 1}&pageSize=20`
      fetch(url)
        .then(response => response.json())
        .then(data => {
          this.setState({ articles: data.articles });
        });
    }
  }





  render() {
    let { title, description, imageUrl, contentUrl } = this.props;




    return (

      <div>
        <Header />
        <div className="flex">
          {this.state.articles.map((articles, index) => {
            title = articles.title;
            description = articles.description;
            imageUrl = articles.urlToImage ? articles.urlToImage : "https://i.redd.it/v1fvin01ynv51.jpg";
            contentUrl = articles.url;
            return (

              <NewsItem
                key={index}
                title={title}
                description={description}
                img={imageUrl}
                url={contentUrl}
              />

            );
          })}
        </div>
        <div className='container d-flex justify-content-between my-3'>
          <button disabled={this.state.page <= 1} type="button" className="btn btn-secondary hover" onClick={this.handelPreviousClick}> &larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 20)} type="button" className="btn btn-secondary hover" onClick={this.handelNextClick}>Next &rarr;</button>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
