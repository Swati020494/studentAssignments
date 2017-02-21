import React from 'react';

class Format extends React.Component {
	constructor(props) {
    super(props)
    this.props=props;
    this.state = {
      value1: '',
      value2: ''
    };
    this.handleChangeVal1 = this.handleChangeVal1.bind(this);
    this.handleChangeVal2 = this.handleChangeVal2.bind(this);
    this.addNum = this.addNum.bind(this);
    this.subtractnNum = this.subtractnNum.bind(this);
    this.multiplyNum = this.multiplyNum.bind(this);
    this.divideNum = this.divideNum.bind(this);

  }
  addNum()
  {
  	this.props.result(Number(this.state.value1)+Number(this.state.value2));
  }
  subtractnNum()
  {
  	this.props.result(Number(this.state.value1)-Number(this.state.value2));
  }
  multiplyNum(){
  	this.props.result(Number(this.state.value1)*Number(this.state.value2));
  }
  divideNum(){
  	this.props.result(Number(this.state.value1) / Number(this.state.value2));
  }
  handleChangeVal1(event) {
    this.setState({value1: event.target.value});
  }
  handleChangeVal2(event) {
    this.setState({value2:event.target.value});
  }


   render() {
      return (
      	<div>
          <input type="text" value={this.state.value1} onChange={this.handleChangeVal1} placeholder="Enter value 1"/>
      	  <input type="text" value={this.state.value2} onChange={this.handleChangeVal2} placeholder="Enter value 2"/>


         <button id="addbtn" onClick={this.addNum}>Add</button>
         <button id="minusbtn" onClick={this.subtractnNum}>Subtract</button>
         <button id="mulbtn" onClick={this.multiplyNum}>Multiply</button>
         <button id="divbtn" onClick={this.divideNum}>Divide</button>
       	</div>

      );
   }
}

export default Format;