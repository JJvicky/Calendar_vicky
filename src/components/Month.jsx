import React, { Component } from 'react';

class Month extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="month">
                <div className="arrow prev"><div></div></div>
                <ul>
                <li className="sub_month active">2019年 3月</li>
                <li className="sub_month">2019年 3月</li>
                <li className="sub_month">2019年 3月</li>
                </ul>
                <div className="arrow next"><div></div></div>
            </div>
         );
    }
}
 
export default Month;