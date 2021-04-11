import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Navbar from './hero/Navbar'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ProductForm from './components/ProductForm';



ReactDOM.render(

  <React.StrictMode>
   <BrowserRouter>
      <Navbar />

      <Switch>
        <div className="container p-4">
          <Route exact path="/" component={App}/>
          <Route path="/new-product" component={ProductForm} />
          <Route path="/update/:id" component={ProductForm} />
       </div>
      </Switch>

    </BrowserRouter>  
    </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();