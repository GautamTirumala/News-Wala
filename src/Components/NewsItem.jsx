import React, { Component } from 'react'

export default class NewsItem extends Component {
 
  render(props) {
    return (
      <div>
        <div className="card" style={{ width: '20rem' }}>
          <img src={this.props.img} class="card-img-top" alt="..." />
          <div className="card-body ">
            <h5 className="card-title">{this.props.title}</h5>
            <p className="card-text">{this.props.description}</p>
            <a href={this.props.url} className="btn btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}
