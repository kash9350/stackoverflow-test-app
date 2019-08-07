import React from 'react';
import '../css/bootstrap.css'

class LoginPage extends React.Component {
    constructor(props){
        super(props)
        this.state={
            emailAddress:'',
            password:'',
            emailValidationMessage:'',
            passwordValidationMessage:''
        }
    }

    setEmail =(event) =>{
        let regex=new RegExp(event.target.pattern, 'g')
        let value=event.target.value
        this.setState({
            emailAddress:value
        },()=>{
            if(!regex.test(value)){
                this.setState({
                    emailValidationMessage:'Please enter valid email !'
                })
            }
            else {
                this.setState({
                    emailValidationMessage:''
                })
            }
        })
    }

    setPassword = (event) =>{
        let minLength=event.target.minLength
        let value=event.target.value
        this.setState({
            password:value
        },()=>{
            if(value.length<minLength){
                this.setState({
                    passwordValidationMessage:'Too short password min length 6 !'
                })
            }
            else {
                this.setState({
                    passwordValidationMessage:''
                })
            }
        })
    }

    loggedIn =() =>{
        if(this.state.emailAddress.length===0){
            this.setState({
                emailValidationMessage:'Email is mandatory !'
            })
        }
        else if(this.state.password.length===0){
            this.setState({
                passwordValidationMessage:'Password is mandatory !'
            })
        }
        else{
            this.props.history.push('/')
        }
    }

    render(){
        let emailPattern=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        return(
            <div style={{display:'flex',paddingTop:'10%'}}>
                <form className="form-signin">
                    <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                    <label for="inputEmail" className="sr-only">Email address</label>
                    <input type="email" pattern={emailPattern} id="inputEmail" className="form-control" placeholder="Email address" required autofocus="" value={this.state.emailAddress} onChange={this.setEmail}/>
                    <label for="inputPassword" className="sr-only">Password</label>
                    <input type="password" minLength={6} id="inputPassword" className="form-control" placeholder="Password" required value={this.state.password} onChange={this.setPassword}/>
                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="Remember me"/> Remember Me
                        </label>
                    </div>
                    <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.loggedIn}>Sign in</button>
                    <label>{this.state.emailValidationMessage}</label>
                    <label>{this.state.passwordValidationMessage}</label>
                </form>
            </div>
        )
    }
}

export default LoginPage