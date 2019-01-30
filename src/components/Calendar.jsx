import React, { Component } from 'react';
import Date from '../components/Date';
import Month from '../components/Month';
import '../Style/components.scss';
import '../Style/reset.scss';

function Weekday(){
    return(
    <div className="weekday">
    <ul>
    <li>星期一</li>
    <li>星期一</li>
    <li>星期一</li>
    <li>星期一</li>
    <li>星期一</li>
    <li>星期一</li>
    <li>星期一</li> 
    </ul>
  
    </div>
    )
}

class Calendar extends Component {

    state = {  }
    render() { 
        return ( 
            <div className="calendar">
             <Month />
             <Weekday />
             <Date />
            </div>
         );
    }
}
 
export default Calendar;