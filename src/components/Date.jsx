import React, { Component } from 'react';

class Date extends Component {
    state = {  }
    render() { 
        return ( 
        <div className="date">
        <ul>    
            <li>
               <div className="title">
               <div className="num_date">1</div>
               <div className="guaranteed">成團</div> 
               </div>
               <div className="status">報名</div>
               <div className="Sell">可賣:11</div>
               <div className="group">團位:22</div>
               <div className="price">$37,800</div> 
            </li>
        </ul>
        </div> 
        );
    }
}
 
export default Date;