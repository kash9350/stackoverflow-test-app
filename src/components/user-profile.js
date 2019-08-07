import React from 'react';
import {getUserProfile, getUserTags} from '../actions/actionMethods';
import '../css/bootstrap.css';

class UserProfile extends React.Component{
    constructor(props){
        super(props)
        this.state={
            isLoading:true,
            isTagsLoading:true,
            userData:{},
            userTags:[]
        }
    }
    componentWillMount(){
        this.clearState()
        getUserProfile(this.props.match.params.id)
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
        getUserTags(this.props.match.params.id)
        .then(res=>{
            this.setState({
                userTags:res.data.items,
                isTagsLoading:false
            })
        })
        .catch(res=>{
            this.setState({
                isTagsLoading:false
            })
        })
    }

    getDerivedStateFromProps(props, state){
        getUserProfile(this.props.match.params.id)
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
        getUserTags(this.props.match.params.id)
        .then(res=>{
            this.setState({
                userTags:res.data.items,
                isTagsLoading:false
            })
        })
        .catch(res=>{
            this.setState({
                isTagsLoading:false
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
            <div className="container" style={{textAlign: 'left',paddingTop:'4rem'}}>
                <h3>User Profile</h3>
                <div className="card">
                    <div className="card-body">
                        {!this.state.isLoading?
                        <div className="row">
                            <div class="col-md-4">
                                <img class="rounded-circle" src={this.state.userData.profile_image} alt="Generic placeholder image" width="140" height="140"/>
                                    <div style={{marginTop:'0.25rem'}} class="alert alert-secondary" role="alert">
                                        {this.state.userData.reputation} Reputation
                                    </div>
                            </div>
                            <div className="col-md-8">
                                <h3>{this.state.userData.display_name}</h3>
                                <button class="btn btn-link" href={this.state.userData.link} role="button">{this.state.userData.link}</button>
                            </div>
                        </div>
                        : <h4>Loading ...</h4>
                    }
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h4>Top Tags</h4>
                        {!this.state.isTagsLoading?
                        this.state.userTags.map((tag)=>{
                            return  <div className="row">
                                        <div class="col-md-6">
                                            <span style={{display:'block', margin:'0.25rem'}} class="badge badge-primary">{tag.name}</span>   
                                        </div>
                                        <div className="col-md-6">
                                            <label>Count {tag.count}</label>
                                        </div>
                                    </div>
                        })
                        : <h4>Loading ...</h4>
                    }
                    </div>
                </div>
            </div>
        )
    }
}

export default UserProfile