import React from 'react'
import './header.scss'
import { auth } from '../../firebase/firebase.util'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo} from '../../assets/light-bulb.svg'

const Header = ({currentUser}) => (
   
    <div className='header'>
     {console.log(currentUser)}
        <Link className="logo-container" to='/'>
            <Logo></Logo>
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
        </div>
    </div>
)

export default Header