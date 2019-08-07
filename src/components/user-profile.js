import React from 'react';
import {getUserProfile} from '../actions/actionMethods';
import '../css/bootstrap.css';

class UserProfile extends React.Component{
    constructor(props){
        super(props)
        this.state={
            isLoading:true,
            userData:{}
        }
    }
    componentWillMount(){
        this.clearState()
        console.log("id",this.props.match.params.id)
        getUserProfile(9594997)
        .then(res=>{
            console.log(res)
            this.setState({
                isLoading:false,
                userData:res.data.items[0]
            })
        })
        .catch(res=>{
            console.log(res)
            this.setState({
                isLoading:false
            })
            
        })
    }

    getDerivedStateFromProps(props, state){
        console.log("id",this.props.match.params.id)
        getUserProfile(9594997)
        .then(res=>{
            console.log(res)
            this.setState({
                isLoading:false,
                userData:res.data.items[0]
            })
        })
        .catch(res=>{
            console.log(res)
            this.setState({
                isLoading:false
            })
            
        })
    }

    clearState(){
        this.setState({
            userData:[]
        })
    }

    render(){
        return(
            <div style={{display:'flex',paddingTop:'10%'}}>
                UserProfile
            </div>
        )
    }
}

export default UserProfile