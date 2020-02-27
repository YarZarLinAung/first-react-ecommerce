import React from 'react';
import HomePage from './pages/homepage/homepage'
import './App.css';
import { Switch, Route } from 'react-router-dom'
import ShopPage from './pages/shop/shop'
import Header from './components/herader/header'
import SignInUp from './pages/sing-in-up/sign-in-up'
import { auth, createUserProfileDocment } from './firebase/firebase.util'


class App extends React.Component {
  constructor(){
    super()

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocment(userAuth)

        userRef.onSnapshot(snapShot => { 
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })
      }
      this.setState({currentUser: userAuth})
    })

  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}></Header>
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route path='/shop' component={ShopPage}></Route>
          <Route path='/signin' component={SignInUp}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
