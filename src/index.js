import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import Projects from './views/Projects';
import Landing from './views/Landing';
import Blog from './views/Blog';
import './styles/global.scss';

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


ReactDOM.render(
  <Router>
    <Switch>
      <Route component={Projects} exact path='/projects' />
      <Route component={Blog} exact path='/blog' />
      <Route component={Landing} exact path='/about' />
      <Route component={Landing} exact path='/' />
      <Route component={Landing} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
