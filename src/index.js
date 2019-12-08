import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './containers/Home';
import Download from './containers/Download';
// import Redirect from './components/Redirect';
import './styles/global.scss';

const initialState = {};

export const store = configureStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <Header />
    <Router>
      <Route component={Download} exact path='/download' />
      <Route component={Home} exact path='/home' />
      <Route component={Home} exact path='/' />
    </Router>
    <Footer />
  </Provider>,
  document.getElementById('root')
);
