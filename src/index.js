import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Home from './containers/Home';
import Projects from './containers/Projects';
import Resume from './containers/Resume';
import About from './containers/About';
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
      <Switch>
        <Route component={Projects} exact path='/projects' />
        <Route component={Resume} exact path='/resume' />
        <Route component={About} exact path='/about' />
        <Route component={About} exact path='/' />
        <Route component={About} />
      </Switch>
    </Router>
    {/* <Footer /> */}
  </div>,
  document.getElementById('root')
);
