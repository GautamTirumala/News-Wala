import React from 'react'
//import NewsItem from './NewsItem'
import Topics from './Topics'
// import {
//   Link,
   
//  } from "react-router-dom";

export default function Header() {
  
    return (
      <div className='header'>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">News-Wala</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav">
              {/* <Topics category='Top-Headlines' /> */}
              <Topics category='Sports'  />
              <Topics category='Technology' />
              <Topics category='Education'/>
              <Topics category='Entertainment' />
              <Topics category='Business' />
              <Topics category='Health' />

              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }

