import React from 'react';
import { Col,Row } from 'react-bootstrap';
import { Button, Grid } from 'react-bootstrap';
import { Glyphicon,Thumbnail } from 'react-bootstrap';

class Icons extends React.Component{
	 constructor(props){
        super(props)
         this.state = {
            jsondataSelectedfoodItem:[],
           key:1
    };

      }
      componentWillMount() {
        console.log("fetching will mount--->",this.props)
        this.fetchSelectedData()
      }
      componentWillReceiveProps(nextProps) {
        this.props = nextProps;
        console.log("new props-->", nextProps);
        this.fetchSelectedData()
    }
  fetchSelectedData(){
    if(this.props.groups.length!=0){
      console.log("fetching--->",this.props)
        var foodItemArray=[];
        var id=this.props.selectedId;
        var foodprop=this.props.groups[id].food_group_id
        console.log("foodprop",foodprop)
          this.props.items.map(function(jdata,i){
            if(jdata.food_group_id==foodprop){
              foodItemArray.push(jdata);}
          })
          this.setState({
          jsondataSelectedfoodItem:foodItemArray
         });
        }
  }
  render(){
    var obj=this
    return (
    <div id="left">
      <Grid>
 		<Row className="show-grid">
        	{
        	  this.state.jsondataSelectedfoodItem.map(function(jdata,i) {
      			return(<Col xs={6} md={3} key={i}>
      				<Thumbnail src={jdata.food_item_pic} alt="242x200" className="thumb">
        			<h3>{jdata.food_item_name}</h3>
      				<p className="btn1">${jdata.food_item_price}</p>
      				<Button className="btn2" onClick={() => obj.props.addToCart(jdata)} ><Glyphicon glyph="plus-sign"/></Button>&nbsp;
     			 	</Thumbnail>
      			</Col>);
        })
      }
     </Row>
       </Grid>

    </div>
  );
 
}}
export default Icons