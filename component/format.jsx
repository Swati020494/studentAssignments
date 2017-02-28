import React from 'react';
import { Button } from 'react-bootstrap';
import { Glyphicon } from 'react-bootstrap';
import { ButtonToolbar, Label,NavDropdown,MenuItem } from 'react-bootstrap';

class Format extends React.Component {
	constructor(props) {
    super(props)
    this.props=props;
      }
  //  shouldComponentUpdate(newProps, newState) {
  //    return true;
  // }
  
	render() {
		var obj=this;
		console.log("props: ",this.props);
      return (
        <div id="wrapper">
          <Button className="btn1"><Glyphicon glyph="menu-hamburger" /></Button>
          <label className="lbl">Show Menu</label>

 			<NavDropdown className="bn2" eventKey="4" title="" id="nav-dropdown">
 			{
 				this.props.cart.map(function(jdata,i) {
				return(<MenuItem className="includeborder" ><img src={jdata.item.food_item_pic} className="small-img"></img><p>Dish Name :{jdata.item.food_item_name} <Button className="btn2" onClick={() => obj.props.delcart(jdata.item.food_item_id)}><Glyphicon glyph="remove-circle" /></Button>&nbsp;</p><p>Quantity:{jdata.quantity} <label></label></p></MenuItem>);
				   })
 			}
            </NavDropdown>
            <Button className="btn2"><Glyphicon glyph="shopping-cart" />
                      <label className="lbl1">{this.props.count}</label></Button>

         </div>
      );
   }
}
export default Format;