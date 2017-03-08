import {createStore,combineReducers,applyMiddleware} from "redux";
import{syncHistoryWithStore, routerMiddleware, routerReducer} from 'react-router-redux';
import{browserHistory} from 'react-router';
import thunk from "redux-thunk"
import data from "./reducers/getDataReducer.jsx";
import user from "./reducers/userReducer.jsx";
import promise from "redux-promise-middleware";

export const store= createStore(combineReducers({data,user,routing:routerReducer}),
	{},
    applyMiddleware(thunk,promise(),routerMiddleware(browserHistory),)
    );
export const history=syncHistoryWithStore(browserHistory,store);