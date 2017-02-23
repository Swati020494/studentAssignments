import React from 'react';
import { Tabs,Tab } from 'react-bootstrap';
class OptionTab extends React.Component {
	constructor(props) {
    super(props)
    this.props=props;
    this.state = {
      jsondata: []
    };
    this.fetchData=this.fetchData.bind(this);
    this.fetchData();

   }
  fetchData(){
    console.log("in fetchData--->");
    $.getJSON('http://ec2-54-165-240-14.compute-1.amazonaws.com:3000/api/foodGroup').then((data)=> {
      console.log("data---------->",data[0].food_group_name);
      this.setState({
      jsondata:data
     });
      console.log(this.state.jsondata);
    });
  }

  render() {
    return (
    <div id="left">
      <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
        {
          this.state.jsondata.map(function(jdata,i) {
          return (<Tab eventKey={i} key={i} title={jdata.food_group_name}></Tab>);
        })
      }
      </Tabs>
    </div>
  );
}
}
export default OptionTab;