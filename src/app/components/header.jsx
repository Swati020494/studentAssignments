import React from 'react';
import { Button } from 'react-bootstrap';
import { Glyphicon } from 'react-bootstrap';
import { ButtonToolbar, Label,NavDropdown,MenuItem,Collapse} from 'react-bootstrap';
import {Card,CardImg,CardBlock,CardTitle,CardSubtitle,CardText} from 'reactstrap';
import {Link} from 'react-router';
var imgStyle11 = {
  right:0,
  zIndex:100,
  position: "absolute",
  backgroundColor:"#f1f1f1",
  float:"right"
};
class Header extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    open:false
  }
}
componentWillReceiveProps(nextProps) {
    this.props = nextProps;
    console.log("this.props.cart-->", this.props.cart, this.props.count);
}
     render(){
      var obj=this
      return (
        <div id="wrapper">
          <Button className="btn1"><Glyphicon glyph="menu-hamburger" /></Button>
          <label className="lbl">Show Menu</label>
          
            <Button className="btn2"><Glyphicon glyph="shopping-cart" onClick={ ()=> this.setState({ open: !this.state.open })}/>
               <label className="lbl1">{this.props.count}</label>
                <Collapse  style={imgStyle11} in={this.state.open} >
                  <div > 
                    {this.props.cart.map(function(jdata,i) {
                       return(<div className=".btm"><Card >
                        <CardImg src={jdata.item.food_item_pic} className="small-img"></CardImg>
                        <CardBlock>
                        <CardTitle>{jdata.item.food_item_name} </CardTitle>
                         <CardSubtitle>${jdata.item.food_item_price}  </CardSubtitle>
                        <CardText>Quantity:{jdata.quantity}
                            <Button className="btn2" onClick={() => obj.props.delete(jdata.item.food_item_id)}>
                              <Glyphicon glyph="minus-sign" />
                            </Button>&nbsp;
                            <Button className="btn2" onClick={() => obj.props.increase(jdata.item.food_item_id)}>
                              <Glyphicon glyph="plus-sign" />
                            </Button>&nbsp;
                        </CardText>

                        </CardBlock>
                        </Card></div>
                        );

                    })}
      &nbsp;<p><Button ><Link to ="/checkout">Proceed To Checkout</Link></Button></p>

          </div>
        </Collapse> 
            </Button>

         </div>
      );}
   
}
export default Header
