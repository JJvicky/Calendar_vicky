import React, { Component } from 'react';

class Date extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="date">
                <div className="date-calendar">
                <table>
                    <tbody>
                    <tr>    
                    <td className="date-active">
                        <div className="title">
                        <div className="num_date">1</div>
                        <div className="guaranteed">成團</div> 
                        </div>
                        <div className="status">報名</div>
                        <div className="sell">可賣 : 11</div>
                        <div className="group">團位 : 22</div>
                        <div className="price">$37,800</div> 
                    </td>
                    <td>
                        <div className="title">
                        <div className="num_date">1</div>
                        <div className="guaranteed">成團</div> 
                        </div>
                        <div className="status">報名</div>
                        <div className="sell">可賣 : 11</div>
                        <div className="group">團位 : 22</div>
                        <div className="price">$37,800</div> 
                    </td>                                       
                </tr>
                    </tbody>
                </table>
               
                </div> 
                <div className="date-list disable">
                <table>
                       <tbody>
                     <tr>    
                    <td>
                    <div className="title">
                        <div className="num_date">1</div>
                        <div className="list-weekday">星期日</div>
                    
                    </div>
                    <section className="middle">
                      <div>
                            <div className="sell">可賣 : 11</div>
                            <div className="group">團位 : 22</div>
                      </div>            
                      <div className="guaranteed">成團</div> 
                    </section>
                    <section className="right">
                        <div className="status">報名</div>
                        <div className="price">$37,800</div> 
                    </section>
                  
                
                    </td>    
                </tr> 
                <tr>    
                    <td>
                    <div className="title">
                        <div className="num_date">1</div>
                        <div className="list-weekday">星期日</div>
                    
                    </div>
                    <section className="middle">
                      <div>
                            <div className="sell">可賣 : 11</div>
                            <div className="group">團位 : 22</div>
                      </div>            
                      <div className="guaranteed">成團</div> 
                    </section>
                    <section className="right">
                        <div className="status">報名</div>
                        <div className="price">$37,800</div> 
                    </section>
                  
                
                    </td>    
                </tr> 
                </tbody>
                </table>
             
              
                </div> 
        </div>
        
        );
    }
}
 
export default Date;