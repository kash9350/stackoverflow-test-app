import React from 'react';
import {withRouter} from 'react-router-dom';
import '../css/bootstrap.css'

class Header extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <label className="navbar-brand" style={{marginBottom:'0'}} onClick={()=>this.props.history.push('/')}>Stackoverflow-Example</label>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href onClick={()=>this.props.history.push('/')}>Home <span className="sr-only">(current)</span></a>
                        </li>
                    </ul>
                    {/* <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Sign Up</button> */}
                    <button className="btn btn-primary my-2 my-sm-0 ml-md-3" type="submit" onClick={()=>this.props.history.push('/login')}>Login</button>
                </div>
                </nav>
            </header>
        )
    }
}

export default withRouter(Header);