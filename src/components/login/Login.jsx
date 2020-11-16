import React, { Component } from "react";
import AuthenticationService from "../js/AuthenticationService";
//import PropTypes from 'prop-types';
import "../todoapp/TodoApp.css";

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "Ramesh",
      password: "",
      isLoginSucessfull: false,
      isShowMessage: false,
    };

    // this.handleUsernameChange=this.handleUsernameChange.bind(this);
    //this.handlePasswordChange=this.handlePasswordChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.validateLogin = this.validateLogin.bind(this);
  }

  // handleUsernameChange(event){
  //     console.log("username change-"+event.target.value);
  //     this.setState({userName:event.target.value})
  // }

  // handlePasswordChange(event){
  //     console.log("passwrod change-"+event.target.value);
  //     this.setState({password:event.target.value})
  // }

  //Coomon handler to handle all change requests
  handleChange(event) {
    //Variables has to put inside brackets
    this.setState({ [event.target.name]: event.target.value });
  }

  validateLogin() {
    if (this.state.userName === this.state.password) {
      this.setState({ isLoginSucessfull: true });
      AuthenticationService.registerLogin(
        this.state.userName,
        this.state.password
      );
      this.props.history.push(`/home/${this.state.userName}`);
    } else {
      this.setState({ isLoginSucessfull: false, isShowMessage: true });
    }
  }

  render() {
    return (
      <div className="login">
        <h1>Login</h1>
        <div className="container">
          {/**<ShowInvalidErrorMessage hasLogged={this.state.isLoginSucessfull}/>  */}
          {this.state.isLoginSucessfull ? (
            <div>Login sucessfull</div>
          ) : this.state.isShowMessage ? (
            <div className="alert alert-warning"> Invalid credentials</div>
          ) : null}
          User Name :{" "}
          <input
            type="text"
            name="userName"
            value={this.state.userName}
            onChange={this.handleChange}
          />
          Password :{" "}
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button className="btn btn-success" onClick={this.validateLogin}>
            Login
          </button>
        </div>
      </div>
    );
  }
}

// function ShowInvalidErrorMessage(props){

//     if(props.hasLogged){
//         return  <div>Login sucessfull</div>
//     }else{
//        return  <div>Invalid credentials</div>
//     }
// }

export default LoginComponent;
