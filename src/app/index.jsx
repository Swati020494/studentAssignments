import {render} from "react-dom";
import React from "react";
import {createStore,combineReducers,applyMiddleware } from "redux";
import logger from "redux-logger";
import App from "./containers/App.jsx"
import{Provider} from "react-redux"

const mathReducer=(state={
result:1,
lastValue:[]
}, action)=>{
switch(action.type){
    case "ADD":
    state={
        ...state,
        result:state.result+action.payload,
        lastValue:[...state.lastValue,action.payload]
    };
    break;
    case "SUBTRACT":
            state={ 
        ...state,
        result:state.result-action.payload,
        lastValue:[...state.lastValue,action.payload]

    }; 
    break;
}
return state;
};
const userReducer=(state={
name:"Swati",
age:22
}, action)=>{
switch(action.type){
    case "SET_NAME":
    state={ 
        ...state,
        name:action.payload,
        };
    break; 
    case "SET_AGE":
            state={ 
        ...state,
        age:action.payload
    }; 
    break;
}
return state;
};
const myLogger=(store)=>(next)=>(action)=>{
    console.log("logged Action:",action);
    next(action);

}
const store=createStore(combineReducers(
{math:mathReducer,user:userReducer}),
{},applyMiddleware(myLogger,logger()));//es6 method ie mathReducer:mathReducer 
store.subscribe(()=>{
// console.log("Store Updated:", store.getState());
}); 
render(
    <Provider store={store} >
        <App />
    </Provider>,
  
    window.document.getElementById('app'));