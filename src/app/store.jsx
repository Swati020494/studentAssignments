import {createStore,combineReducers,applyMiddleware} from "redux";
import thunk from "redux-thunk"
import data from "./reducers/getDataReducer.jsx";
import user from "./reducers/userReducer.jsx";
import promise from "redux-promise-middleware";
export default createStore(combineReducers({data,user}),
	{},
    applyMiddleware(thunk,promise())
    );