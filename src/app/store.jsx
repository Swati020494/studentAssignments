import {createStore,combineReducers,applyMiddleware} from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk"
import math from "./reducers/mathReducer.jsx";
import user from "./reducers/userReducer.jsx";
import promise from "redux-promise-middleware";
export default createStore(combineReducers({math,user}),
    {},
    applyMiddleware(logger(),thunk,promise())
);