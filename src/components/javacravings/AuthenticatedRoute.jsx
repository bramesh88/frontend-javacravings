import React, { Component } from 'react';
import {Route,Redirect} from 'react-router-dom';
import AuthenticationService from '../js/AuthenticationService';

class AuthenticateRoute extends Component{

    render(){

        if(AuthenticationService.isUserLoggedIn()){
           return <Route {...this.props}/>
        }else{
           return <Redirect to="/login"></Redirect>
        }
    }
}

export default AuthenticateRoute;