import React from 'react';
import {withRouter} from 'react-router-dom';
import '../css/bootstrap.css';

class Question extends React.Component{

    render(){
        let modifiedDate=new Date(this.props.data.last_activity_date)
        return(
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col col-md-2">
                            <h5>{this.props.data.score}</h5>
                            <small>votes</small>
                        </div>
                        <div className="col col-md-2">
                            <h5>{this.props.data.answer_count}</h5>
                            <small>answers</small>
                        </div>
                        <div className="col col-md-2">
                            <h5>{this.props.data.view_count}</h5>
                            <small>views</small>
                        </div>
                        <div className="col col-md-6">
                            <div className="row">
                                <div className="col">
                                    {this.props.data.title}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    {this.props.data.tags.map((tag)=>{
                                        return(<span style={{display:'inline-block', margin:'0.25rem'}} class="badge badge-primary">{tag}</span>)
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    <small className="text-muted">modified: {modifiedDate.toLocaleString()}</small> <button className="btn btn-link" href onClick={()=>this.props.history.push('/userProfile/'+this.props.data.owner.user_id)}>{this.props.data.owner.display_name}</button>
                </div>
            </div>
        )
    }
}

export default withRouter(Question)