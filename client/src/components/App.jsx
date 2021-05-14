import React, {Component} from 'react';
import {BrowserRouter,Route } from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../Action';   
import Header from "./Header";
import Landing from "./landing";

const dashboard = ()=>{
    return(
        <h2>Dashboard</h2>
    );
}


const survey = ()=>{
    return(
        <h2>Add new survey</h2>
    );
}

class App extends Component{
    componentDidMount(){
     this.props.fetchUser();
    }
    render(){
    return(
        <>
        <div className="container">
            <BrowserRouter>
            <div>
                <Header/>
                <Route exact path="/" component={Landing}/>
                <Route exact path="/survey" component={dashboard}/>
                <Route path="/survey/new" component={survey}/>
            </div>
            
            </BrowserRouter>


        </div>
        </>
    );
    };
}

export default connect(null,actions)(App);