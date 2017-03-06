import React from 'react';
import { Tabs,Tab } from 'react-bootstrap';
class OptionTab extends React.Component {
    constructor(props){
        super(props)
        this.handleSelect=this.handleSelect.bind(this);
      }
      handleSelect(key){
        console.log("handle props---->",this.props)
        console.log("selected id ",key)
        this.props.select(key)
   } 
    componentWillReceiveProps(nextProps) {
        this.props = nextProps;
        console.log("new props-->", nextProps);
    }
  render(){
      var that=this
      console.log("render props---->",this.props)
	    return (
    <div id="left">
      <Tabs activeKey={that.props.selectedId} onSelect={that.handleSelect} id="uncontrolled-tab-example" >
         {

           that.props.groups.map(function (jdata,i){
                 return (<Tab eventKey={i} key={i}  title={jdata.food_group_name}> </Tab>);

           })
          }
      </Tabs>
      </div>
  );
}
}
export default OptionTab;