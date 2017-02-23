import React from 'react';
import { Button } from 'react-bootstrap';
import { Glyphicon } from 'react-bootstrap';
import { ButtonToolbar, Label } from 'react-bootstrap';

class Format extends React.Component {
	constructor(props) {
    super(props)
    this.props=props;
     this.state = {
      foodInCart: 0,
  }
    this.setCart();

   }
   componentWillMount() {
   	this.setCart();
   }
  setCart(){
  	var obj=this;
      	var storedNames = JSON.parse(localStorage.getItem("names"));
      	if(storedNames==null || storedNames==undefined){	
  		obj.setState({
  			foodInCart: 0
  		});
  		}
  	else
  	{
  		obj.setState({
  			foodInCart: storedNames.length
  		});

  	}
  }
  
	render() {
		var obj=this;
      return (
        <div id="wrapper">
          <Button className="btn1"><Glyphicon glyph="menu-hamburger" /></Button>
          <label className="lbl">Show Menu</label>
          <Button className="btn2"><Glyphicon glyph="shopping-cart" /><label className="lbl1">{this.state.foodInCart}</label></Button>
         </div>
      );
   }
}
export default Format;