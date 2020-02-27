import React, { Component } from 'react'
import FormInput from '../form-input/form-input'
import CustomButton from '../custom-button/custom-button'
import { auth, createUserProfileDocment } from '../../firebase/firebase.util'
import './sign-up.scss'

class SignUp extends Component{
    constructor(){
        super()

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handlerSubmit = async event=> {
        event.preventDefault()

        const { displayName, email, password, confirmPassword} = this.state

        if(password !== confirmPassword){
            alert('password did not match')
            return
        }

        try{
            const { user } = await auth.createUserWithEmailAndPassword(email, password)

            await createUserProfileDocment(user, {displayName})
            this.setState ({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
            
        }catch(error){
            console.log(error)
        }

    }

    handlerChange = event => {
        const { name, value } = event.target

        this.setState({ [name]: value})
    }

    render(){
        const { displayName, email, password, confirmPassword} = this.state
        return(
            <div className="sign-up">
                <h2 className='title'>I do not have an account</h2>
                <span>Sign Up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handlerSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handlerChange}
                        label='Display Name'
                        required
                    />  
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handlerChange}
                        label='Email'
                        required
                    />  
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handlerChange}
                        label='Password'
                        required
                    />       
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handlerChange}
                        label='Confirm Password'
                        required
                    />               
                    <CustomButton type='submit'>Submit</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp