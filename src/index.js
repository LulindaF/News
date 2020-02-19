import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './Pages/Landing';
import Contact from './Pages/Contact';
import Error from './Pages/Error';
import AppModel from './Components/Redirect';
import Source from './Components/Source';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';


const routing = (
	<Router>
		<div>
			<Switch>
				<Route exact path="/" component={Landing} />
				<Route path="/contact" component={Contact} />
				<Route path="/redirect" component={AppModel} />
				<Route path="/source" component={Source} />
				<Route component={Error} />
			</Switch>
		</div>
	</Router>
)

ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
