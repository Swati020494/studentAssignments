import React from 'react';
import Format from './component/format.jsx'
class App extends React.Component {
   constructor(props){
      super(props);
      this.state = {
         value : ''
      };
      this.result = this.result.bind(this);
   }
   result(response){
      this.setState({
         value : response
      });
   }
   render() {
      return (
         <div>
         <Format result={this.result}/>
         <label>{this.state.value}</label>
         </div>
      );
   }
}
export default App;