import React, { Component } from 'react'

export default class NewsItem extends Component {

  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
     

    };
  }

  //https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=6f7eb16038f74e96a3a9cb87132b5f14


  componentDidMount() {
    
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6f7eb16038f74e96a3a9cb87132b5f14&pageSize=${this.props.pageSize}`
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({ articles: data.articles, totalResults: data.totalResults });
        console.log(data);

      });
  }



  handelPreviousClick = () => {
    this.setState({ page: this.state.page - 1 })
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=6f7eb16038f74e96a3a9cb87132b5f14&page= ${this.state.page - 1}&pageSize=${this.props.pageSize}`
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
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=6f7eb16038f74e96a3a9cb87132b5f14&page= ${this.state.page + 1}&pageSize=${this.props.pageSize}`
      fetch(url)
        .then(response => response.json())
        .then(data => {
          this.setState({ articles: data.articles });
        });
    }
  }


 
  render(props) {
    let { title, description, imageUrl, contentUrl } = this.props;

    return (
    <>
      <div className="flex">
          {this.state.articles.map((articles, index) => {
            title = articles.title;
            description = articles.description;
            imageUrl = articles.urlToImage ? articles.urlToImage : "https://i.redd.it/v1fvin01ynv51.jpg";
            contentUrl = articles.url;
           return(
                 <div>
                    <div className="card" style={{ width: '20rem' }}>
                      <img src={imageUrl} class="card-img-top" alt="..." />
                      <div className="card-body ">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={contentUrl} className="btn btn-dark">Read More</a>
                      </div>
                    </div>
                 </div>
           )
          })}
        </div>
        <div className='container d-flex justify-content-between my-3'>
          <button disabled={this.state.page <= 1} type="button" className="btn btn-secondary hover border border-dark" onClick={this.handelPreviousClick}> &larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 20)} type="button" className="border border-dark btn btn-secondary hover" onClick={this.handelNextClick}>Next &rarr;</button>
        </div>
    </>
      
      
      
      
      
      
      
      
      
      
      
      
      
      //Previous news app
      
    )
  }
}
