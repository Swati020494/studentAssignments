import {render} from "react-dom";
import React from "react";
import {Route,Router, IndexRoute} from 'react-router';
import Header from "./components/header.jsx";
import Checkout from "./components/checkout.jsx";
import App from "./containers/App.jsx";
import OptionTab from "./components/tabs.jsx";
import{Provider} from "react-redux";
import {store, history} from "./store.jsx";
render(
	<Provider store={store} >
		<Router history={history}>
			<Route path="/" component={App}/> 

			<Route path="/checkout" component={Checkout}/>
		</Router>
	</Provider>,
document.getElementById('app'));