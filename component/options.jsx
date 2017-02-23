import React from 'react';
import { Col,Row } from 'react-bootstrap';
import { Button, Grid } from 'react-bootstrap';
import { Glyphicon,Thumbnail } from 'react-bootstrap';

class Optionsicons extends React.Component {
	constructor(props) {
    super(props)
    //this.props=props;
    this.state = {
      jsondataAllfoodItem: [],
      jsondataSelectedfoodItem:[],
      key:1
    };

   }
   componentWillMount() {
   	this.fetchAllData();
   }
  fetchAllData(){
    $.getJSON('http://ec2-54-165-240-14.compute-1.amazonaws.com:3000/api/foodItem').then((data)=> {
      this.setState({
      jsondataAllfoodItem:data
     });
        this.fetchSelectedData();
    });
  }
  fetchSelectedData(){
  	var foodItemArray=[];
  	var foodprop=this.props.food_group_id;
   	 this.state.jsondataAllfoodItem.map(function(jdata,i){
   	 	console.log("outside: "+foodprop);
   	 	if(jdata.food_group_id==foodprop){
   	 		   	 	console.log("inside if: "+foodprop);
   	 		foodItemArray.push(jdata);}
   	 })
      this.setState({
      jsondataSelectedfoodItem:foodItemArray
     });
    
  }
  
    render() {
    return (
    <div id="left">
      <Grid>
 		<Row className="show-grid">
        	{
        	  this.state.jsondataSelectedfoodItem.map(function(jdata,i) {
      			return(<Col xs={6} md={3}>
      				<Thumbnail src={jdata.food_item_pic} alt="242x200">
        			<h3>{jdata.food_item_name}</h3>
       				<p>{jdata.food_item_short_desc}</p>
      				<p><Button className="btn1"><Glyphicon glyph="plus-sign" /></Button>&nbsp;</p>
     			 	</Thumbnail>
      			</Col>);
        })
      }
     </Row>
       </Grid>

    </div>
  );
}
 
}
export default Optionsicons;