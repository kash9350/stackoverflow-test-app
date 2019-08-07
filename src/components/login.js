import React from 'react';
import '../css/bootstrap.css'

class LoginPage extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div style={{display:'flex',paddingTop:'10%'}}>
                <form className="form-signin">
                    <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                    <label for="inputEmail" className="sr-only">Email address</label>
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" autofocus=""/>
                    <label for="inputPassword" className="sr-only">Password</label>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required=""/>
                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="Remember me"/> Remember Me
                        </label>
                    </div>
                    <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={()=>this.props.history.push('/')}>Sign in</button>
                </form>
            </div>
        )
    }
}

export default LoginPage