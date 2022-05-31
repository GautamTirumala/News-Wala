import React from "react";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import NewsItem from "./Components/NewsItem";
import { BrowserRouter , Routes , Route} from "react-router-dom";


function App() {
 
    return (
      <div>
      <BrowserRouter>
        <Header />
        <h1 className='flex mt-2'>News</h1>
        <Routes>
        <Route path='/' element={<NewsItem key='general' pageSize='8' category='general' country='in'/>}/>
           <Route  path='Sports' element={<NewsItem key='Sports' pageSize='8' category='Sports' country='in'/>}/>
           <Route  path='Science' element={<NewsItem key='Science' pageSize='8' category='Science' country='in'/>}/>
           <Route  path='Technology' element={<NewsItem key='Technology' pageSize='8' category='Technology' country='in'/>}/>
           <Route  path='Entertainment' element={<NewsItem key='Entertainment' pageSize='8' category='Entertainment' country='in'/>}/>
           <Route  path='Business' element={<NewsItem key='Business' pageSize='8' category='Business' country='in'/>}/>
           <Route  path='Health' element={<NewsItem key='Health' pageSize='8' category='Health' country='in'/>}/>
     

        </Routes>
        <Footer />
      </BrowserRouter>
      </div>
    );
  }

export default App;
