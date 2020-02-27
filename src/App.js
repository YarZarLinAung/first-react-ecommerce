import React from 'react';
import HomePage from './pages/homepage/homepage'
import './App.css';
import { Switch, Route } from 'react-router-dom'
import ShopPage from './pages/shop/shop'
import Header from './components/herader/header'
import SignInUp from './pages/sing-in-up/sign-in-up'
import { auth, createUserProfileDocment } from './firebase/firebase.util'
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user-action'


class App extends React.Component {
  unsubscribeFromAuth = null

  componentDidMount() {
    const {setCurrentUser} = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocment(userAuth)

        userRef.onSnapshot(snapShot => { 
          this.props.setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          })
        })
      }
      setCurrentUser(userAuth)
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header></Header>
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route path='/shop' component={ShopPage}></Route>
          <Route path='/signin' component={SignInUp}></Route>
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user=> dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App)
