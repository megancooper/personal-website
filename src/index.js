import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Home from './containers/Home';
import Work from './containers/Work';
import Nav from './components/Nav';
// import Redirect from './components/Redirect';
import './styles/global.scss';

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


ReactDOM.render(
  <div>
    <Nav />
    <Router>
      <Route component={Work} exact path='/work' />
      {/* <Route component={App} exact path='/home' /> */}
      <Route component={Work} exact path='/' />
    </Router>
    {/* <Footer /> */}
  </div>,
  document.getElementById('root')
);
