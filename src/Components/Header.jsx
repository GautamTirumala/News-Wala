import React, { Component } from 'react'

export default class Header extends Component {
  google = 'https://www.google.co.in/'
  render() {
    return (
      <div className='header'>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href={this.google}>News-Wala</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href={this.google}>Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href={this.google}>Features</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href={this.google}>Pricing</a>
                </li>

              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
