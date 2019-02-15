import React, { Component } from 'react';
class PageNumber extends Component {
        changePage = (e)=>{
         const page = e.currentTarget.getAttribute("data-page");
         this.props.changePage(page);
        }
        createli = () => {
            let li = []
            const ar =this.props.pageNumber.length;
            for (let i = 0; i < ar; i++) {
              li.push(<li key={i} data-page={i+1} onClick={this.changePage}>
                {
                 ` ${i+1}`
                }
              </li>  )
            }
            return li
          }           
    

    render() { 
        
        return ( 
            
             <div className="pagenumber">
        <ul>
           {/* {this.createli()} */}
          {this.props.pageNumber? this.createli():''}      
        </ul>
        </div>
         );
    }
}
 
export default PageNumber;