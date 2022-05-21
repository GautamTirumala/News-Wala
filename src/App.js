import React from "react";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import NewsItem from "./Components/NewsItem";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
 
  
// } from "react-router-dom";

function App() {
 
    return (
      <div>
      
        <Header />
        <h1 className='flex'>News</h1>
        <NewsItem pageSize='8' category='general' country='in'/>

        {/* <NewsItem pageSize='8' category='business' country='in'/> */}

       
        {/* <Router>
        <Routes>
        
          <Route path="/home">
        <NewsItem pageSize='8' category='general' country='in'/>
          </Route>
          <Route path="/Sports">
        <NewsItem pageSize='8' category='sports' country='in'/>
            
          </Route>
          <Route path="/Technology">
        <NewsItem pageSize='8' category='technology' country='in'/>
            
          </Route>
          <Route path="/Education">
        <NewsItem pageSize='8' category='education' country='in'/>
            
          </Route>
          <Route path="/Entertainment">
        <NewsItem pageSize='8' category='entertainment' country='in'/>
            
          </Route>
          <Route path="/Business">
        <NewsItem pageSize='8' category='Business' country='in'/>
          
          </Route>
          <Route path="/Health">
        <NewsItem pageSize='8' category='Health' country='in'/>
          
          </Route>
          </Routes>
        </Router> */}
        <Footer />
      </div>
    );
  }

export default App;
