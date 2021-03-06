import React, { Component } from 'react';
// import Calendar from './stories/Calendar.stories';
import Calendar from './components/calendar/Calendar.jsx';

const dataKeySetting ={
  // 保證出團
      "guaranteed": "guaranteed",
      // 狀態
      'status': 'status',
      // 可賣團位
      'available': 'availableVancancy',
      // 團位
      'total': 'totalVacnacy',
      // 價格
      'price': 'price'
  }

class App extends Component {

constructor(props) {
  super(props);
  this.child= React.createRef();
  
}
state = {
  destroy : false
}

hello = ()=>{
  console.log("heool");
}
switch = ()=>{
  this.child.current.switch();
}
nextMonth = ()=>{
  this.child.current.onClickNext();
}
prevMonth = ()=>{
  this.child.current.onClickPrev();
}
inputData = (x)=>{
  this.child.current.inputData(x);
}
resetData = (x)=>{
  this.child.current.resetData(x);
}
destroy = ()=>{
  this.setState({
    destroy : !this.state.destroy
  }) 
}
alive = ()=>{
  this.setState({
    destroy : !this.state.destroy
  }) 
}

  render() {
    console.log(this.state.destroy);

    return (
      <div className="App">
      {this.state.destroy ? '':<Calendar dataSource="./src/json/data1.json"
       initYearMonth="201712"
       ref={this.child}
       dataKeySetting = {dataKeySetting}
       />}
    
      </div>
    );

  }
 
}

export default App;
