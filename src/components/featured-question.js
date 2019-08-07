import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars'
import {getFeaturedQuestion} from '../actions/actionMethods';
import Question from './question';
import '../css/bootstrap.css';

class FeaturedQuestion extends React.Component{
    constructor(props){
        super(props)
        this.state={
            isLoading:true,
            featureQuestions:[],
            hasMore:true,
            page:1
        }
    }
    componentWillMount(){
        this.clearState()
        this.handleUpdate()
    }

    handleUpdate = () => {
        getFeaturedQuestion(this.state.page)
        .then(res=>{
            console.log(res)
            this.setState({
                isLoading:false,
                featureQuestions:[...this.state.featureQuestions].concat(res.data.items)
            },()=>{
                if(res.data.has_more || res.data.quota_remaining > 0){
                    this.setState({
                        hasMore:res.data.has_more,
                        page:this.state.page + 1
                    })
                }
                else {
                    this.setState({
                        hasMore:false
                    })
                }
            })
        })
        .catch(res=>{
            console.log(res)
            this.setState({
                isLoading:false,
                hasMore:false
            })
            
        })
    }

    clearState(){
        this.setState({
            featureQuestions:[]
        })
    }

    render(){
        return(
            <div className="container" style={{textAlign: 'left',paddingTop:'4rem'}}>
                <h3>Top Questions [Featured]</h3>
                <Scrollbars style={{ height: (window.innerHeight-110) + 'px' }} onScrollStop={this.handleUpdate}>
                    { !this.state.isLoading?
                        this.state.featureQuestions.length > 0 ?
                            this.state.featureQuestions.map((questions)=>{
                                return(
                                    <Question data={questions}></Question>
                                )
                            })
                        :
                        <h3>'No Question found'</h3>
                    : <h4>Loading ...</h4>
                    }
                </Scrollbars>
            </div>
        )
    }
}

export default FeaturedQuestion