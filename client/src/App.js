import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Bodys from './containers/body'
import EditGarage from './containers/editgarage'
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import store from './store'
import Bod from './containers/body'
import Editcar from './containers/modal'
import 'semantic-ui-css/semantic.min.css'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Car Garage</h1>
          <br/>
          <br/>
        </header>
        <BrowserRouter>
         <Switch>
           <Route exact path="/" component={Bod}/>
           <Route exact path="/edit/:id" component={EditGarage}/>
           <Route exact path="/car/:id" component={Editcar}/>
         </Switch>
      </BrowserRouter>


      </div>
    </Provider>
    );
  }
}

export default App;
