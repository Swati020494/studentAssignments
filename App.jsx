import React from 'react';
import Format from './component/format.jsx'
import OptionTab from './component/tabs.jsx'
class App extends React.Component {
   constructor(props){
      super(props);
      this.state = {
         data : ''
      };
      this.result = this.result.bind(this);
   }
   result(response){
      this.setState({
         data : response
      });
   }
   render() {
      return (
         <div>
         <Format />
         <OptionTab result={this.result}/>
         <label>{this.state.data}</label>
         </div>
      );
   }
}
export default App;