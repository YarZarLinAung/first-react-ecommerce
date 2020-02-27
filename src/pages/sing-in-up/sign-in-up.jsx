import React from 'react'
import './sing-in-up.scss'
import SignIn from '../../components/sing-in/sign-in'
import SignUp from '../../components/sign-up/sign-up'

const SingInAndSignUp = () => (
    <div className='sign-in-and-sign-up'>
         <SignIn></SignIn>
         <SignUp></SignUp>
    </div>
)

export default SingInAndSignUp