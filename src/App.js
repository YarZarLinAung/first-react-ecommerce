import React from 'react';
import HomePage from './pages/homepage/homepage'
import './App.css';
import { Switch, Route } from 'react-router-dom'
import ShopPage from './pages/shop/shop'

const HatsPage = () => (
  <div>
    <h1>Hat Page</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route path='/shop' component={ShopPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
