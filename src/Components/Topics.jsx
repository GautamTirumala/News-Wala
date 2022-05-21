import React from 'react';
// import {
//    Link,
    
//   } from "react-router-dom";

const Topics = (props) => {
    return (
        <div>
            <li className="nav-item">
           
                  <a  className="nav-link hover-text" href={`/${props.category}`} >{props.category}</a>
                  
            </li>
        </div>
    );
}

export default Topics;
