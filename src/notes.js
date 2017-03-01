// import React from "react";
// import {render} from "react-dom";

// import { User } from './components/User';
// import { Main } from './components/Main';

// class App extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             username: "Max"
//         };
//     }

//     changeUsername(newName) {
//         this.setState({
//             username: newName
//         });
//     }

//     render() {
//         return (
//             <div className="container">
//                 <Main changeUsername={this.changeUsername.bind(this)}/>
//                 <User username={this.state.username}/>
//             </div>
//         );
//     }
// }

// render(<App />, window.document.getElementById('app'));
import {createStore } from "redux";
const initialState ={
result:1,
lastValue:[]
};  
const reducer=(state=initialState,action)=>{
//in ES6 initialState is used to initialise the state , if not defined it use the above declared one other wise it uses thethe  one present
switch(action.type){
    case "ADD":
    // state.result+=action.payload;
    state={
        ...state,
        //spread operator... tells  js/es6 give me all the properties of state onject
        //ie.const initialState ={
        //result:state.result,
        //lastValue:state.lastValue
        //}; 
        result:state.result+action.payload,
        lastValue:[...state.lastValue,action.payload]
    };
        // state.lastValue.push(action.payload);   

    break;
    case "SUBTRACT":
            state={ 
        ...state,
        result:state.result-action.payload,
        lastValue:[...state.lastValue,action.payload]

    }; 
    break;
}
return state;//have to return a state which is taken as the new state
};
const store=createStore(reducer);//removing the parameter coz initialState variable taken
// const store=createStore(reducer,40);// using reducer takes your action and does something with that action
//store knows that this reducer will give me a new state so reducer has to return a new state
store.subscribe(()=>{
console.log("Store Updated:", store.getState());
});
store.dispatch({
    type:"ADD",
    payload:100//the number i want to add
}); //dispatch method expects a javascript object
//hey store here is a new action
store.dispatch({
    type:"ADD",
    payload:200
});
store.dispatch({
    type:"SUBTRACT",
    payload:150
});