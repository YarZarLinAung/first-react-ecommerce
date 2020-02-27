import React, { Component } from 'react'
import './sign-in.scss'
import FormInput from '../form-input/form-input'
import CustomButton from '../custom-button/custom-button'
import { signInWithGoogle, auth } from '../../firebase/firebase.util'

class SignIn extends Component {
    constructor (props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handlerSubmit = async event => {
        event.preventDefault()
        const { email, password } = this.state
        try{
            await auth.signInWithEmailAndPassword(email,password)
            this.setState({ email: '', password: ''})
        }catch(error){
            console.log(error)
        }
        
    }

    handlerChange = event => {
        const { value , name } = event.target
        this.setState({ [name] : value})
    }

    render() {
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
            
                <form onSubmit={this.handlerSubmit}>
                    <FormInput 
                        name="email" 
                        type="email" 
                        value={this.state.email}
                        handlerChange={this.handlerChange}
                        label='email'
                        ></FormInput>
                    <FormInput 
                        name="password" 
                        type="password" 
                        value={this.state.password}
                        handlerChange={this.handlerChange}
                        label="password"
                        ></FormInput>
                    
                    <div className="buttons">
                        <CustomButton type='submit' >Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                        Sign In With Google
                        </CustomButton>
                    </div>
                </form>

            </div>
        )
    }
}

export default SignIn