import React, { Component } from 'react'
import './sign-in.scss'

class SignIn extends Component {
    constructor (props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handlerSubmit = event => {
        event.preventDefault()
        this.setState({ email: '', password: ''})
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
                    <input 
                        name="email" 
                        type="email" 
                        value={this.state.email}
                        onChange={this.handlerChange}
                        required></input>
                    <label>Email</label>
                    <input 
                        name="password" 
                        type="password" 
                        value={this.state.password}
                        onChange={this.handlerChange}
                        required></input>
                    <label>Password</label>

                    <input type='submit' value='Submit Form'/>
                </form>

            </div>
        )
    }
}

export default SignIn