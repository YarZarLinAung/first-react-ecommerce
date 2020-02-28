import React from 'react'
import './header.scss'
import { auth } from '../../firebase/firebase.util'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo} from '../../assets/shop.svg'
import CartIcon from '../cart/cart-icon/cart'
import CartDropDown from '../cart/cart-dropdown/cart-dropdown'

const Header = ({currentUser, hidden}) => (
   
    <div className='header'>
     {console.log(currentUser)}
        <Link className="logo-container" to='/'>
            <Logo className="logo"></Logo>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>Shop</Link>
            <Link className='option' to='/shop'>Contact Us</Link>
            {
                currentUser ? 
                <div className='option' onClick={() => auth.signOut()}> Sign Out</div>
                :
               <Link className='option' to='/signin'>Sign In</Link>
            }
            <CartIcon/>
        </div>
        {
            hidden ? null :  <CartDropDown/>
        }
       
    </div>
)

const mapStateToProps = ({user: { currentUser }, cart: { hidden }}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps,null)(Header)