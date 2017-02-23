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
    this.storeCart=this.storeCart.bind(this);

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
  storeCart(data){
  	var names=[];
  	var storedNames = JSON.parse(localStorage.getItem("names"));
  	console.log(storedNames);
  	if(storedNames==null||storedNames==undefined){	
  		names.push(data);
  		localStorage.setItem("names", JSON.stringify(names));
  	}
  	else
  	{
  		storedNames.push(data);
  		localStorage.setItem("names", JSON.stringify(storedNames));

  	}
  	console.log("data",data);
  	window.location.reload();

  }

  
    render() {
    	var obj=this;
    return (
    <div id="left">
      <Grid>
 		<Row className="show-grid">
        	{
        	  this.state.jsondataSelectedfoodItem.map(function(jdata,i) {
      			return(<Col xs={6} md={3}>
      				<Thumbnail src={jdata.food_item_pic} alt="242x200" className="thumb">
        			<h3>{jdata.food_item_name}</h3>
       				<p>{jdata.food_item_short_desc}</p>
      				<p className="btn1">${jdata.food_item_price}</p>
      				<Button className="btn2" onClick={() => obj.storeCart(jdata)}><Glyphicon glyph="plus-sign"/></Button>&nbsp;
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