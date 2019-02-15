import React, { Component } from 'react';
import Date from '../components/Date';
import Month from '../components/Month';
import '../Style/components.scss';
import '../Style/reset.scss';
import axios from 'axios';
// import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios'


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
    
    state = { 
        list : []
     }
    
    

    // componentDidMount = () =>{
    //     const url = './json/data1.json';
    //     axios.get(url)
    //     .then((response) => {
    //         console.log(response);
    //     })
    //     .catch((error)=> {
    //         console.log(error);
    //     });
    // }

    componentDidMount(){
        fetch(
          "./json/data1.json",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json"
            }
          }
        )
          .then(res => res.json())
          .then(result => {
            console.log(result);
            this.setState({
              data: result
            });
            // this.handleFilter(result);
          })
          .catch(err => console.log(err));
      }
   
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