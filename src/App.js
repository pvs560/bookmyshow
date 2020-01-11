import React from 'react';
import MovieContainer from './MovieComponent/MovieContainer';
import BookScreenComponent from "./MovieComponent/BookScreenComponent";
import { Router, Route, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';
import history from './history.js';
import store from './MovieComponent/CreateStore';
import './App.css';

export default class App extends React.Component{

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>BookMyShow</h1>
        </header>
        <Provider store={store}>
        <Router history={history} >
          <Switch>
            <Route exact path="/" component={MovieContainer} />
            <Route path="/bookmovie" component={BookScreenComponent}/>
          </Switch>
        </Router>
    </Provider>
      </div>
    );
  }
}
