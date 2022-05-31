import React from 'react';
import {Link } from 'react-router-dom'

const Topics = (props) => {
    return (
        <div>
            <li className="nav-item">
          
                  <Link className="nav-link hover-text" to={props.category} >{props.category}</Link>
            
            
            </li>
        </div>
    );
}

export default Topics;
