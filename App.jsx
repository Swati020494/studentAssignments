import React from 'react';
import Format from './component/format.jsx'
import OptionTab from './component/tabs.jsx'
class App extends React.Component {
   constructor(props){
      super(props);
          this.props=props;
       }
   render() {
      return (
         <div>
         <Format />
         <OptionTab />
         </div>
      );
   }
}
export default App;