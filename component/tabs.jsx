import React from 'react';
import { Tabs,Tab } from 'react-bootstrap';
import Optionsicons from './options.jsx'

class OptionTab extends React.Component {
	constructor(props) {
    super(props)
    this.props=props;
    this.state = {
      jsondatafoodGroup: [],
      key:1
    };
    this.fetchData=this.fetchData.bind(this);
    this.handleSelect=this.handleSelect.bind(this);
    this.fetchData();

   }
  fetchData(){
    $.getJSON('http://ec2-54-165-240-14.compute-1.amazonaws.com:3000/api/foodGroup').then((data)=> {
      this.setState({
      jsondatafoodGroup:data
     });
    });
  }
  handleSelect(key) {
    alert('selected ' + key);
    this.setState({key});
    
  }
    render() {
    return (
    <div id="left">
      <Tabs defaultActiveKey={1} id="uncontrolled-tab-example" >
        {
          this.state.jsondatafoodGroup.map(function(jdata,i) {
            return (<Tab eventKey={i} key={i}  title={jdata.food_group_name}><Optionsicons food_group_id={jdata.food_group_id}/></Tab>);
            
          })
        }
      </Tabs>
      </div>
  );
}
}
export default OptionTab;