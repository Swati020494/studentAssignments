import React from 'react';
import {connect} from "react-redux";
import {Panel,ListGroup,ListGroupItem} from 'react-bootstrap'
import {Card,CardImg,CardBlock,CardTitle,CardSubtitle,CardText} from 'reactstrap';

class Checkout extends React.Component {

componentWillReceiveProps(nextProps) {
    this.props = nextProps;
    console.log("new props-->", nextProps);
}

render() {
const title = (
  <h3>Total Bill:${this.props.user.total}</h3>
);	
console.log("inside checkout: ", this.props.user.foodInCart);
	return (
	<div>
		<Panel header={title} bsStyle="info">
	    	<ListGroup fill>
	    		{
	    			this.props.user.foodInCart.map(function(jdata,i) {
							return(<ListGroupItem>
				    			<Card classnName="floating-card">
								  <div  classnName="floating-card"><CardImg src={jdata.item.food_item_pic} className="med-img"></CardImg></div>
								  <CardBlock classnName="floating-card">
								   	<CardTitle>{jdata.item.food_item_name} </CardTitle>
								   	<CardSubtitle>${jdata.item.food_item_price}  </CardSubtitle>
								   	<CardText>Quantity:{jdata.quantity} </CardText>
								  </CardBlock>
								</Card>
							</ListGroupItem>
							)
			})
	    		}
			</ListGroup>
		</Panel>
    </div>
  );
}}
const mapStateToProps=(state)=>{
    return{
        user: state.user,
        data:state.data
    };
};
const mapDispatchToProps=(dispatch)=>{
    return{
   
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Checkout)