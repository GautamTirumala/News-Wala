import React from 'react'
//import NewsItem from './NewsItem'
import Topics from './Topics'
import {Link } from 'react-router-dom'



export default function Header() {
  
    return (
      <div className='header'>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">News-Wala</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav">
           
              <Topics category='Sports'  />
              <Topics category='Technology' />
              <Topics category='Entertainment' />
              <Topics category='Science'/>
              <Topics category='Business' />
              <Topics category='Health' />

              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }

