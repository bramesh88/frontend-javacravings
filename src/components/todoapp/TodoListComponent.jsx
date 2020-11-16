import React, { Component } from 'react';
import AuthenticationService from '../js/AuthenticationService';
import ToDoService from '../../api/todo/ToDoDataService.js';
import '../todoapp/TodoApp.css';

class TodoListComponent extends Component{

    constructor(props){
        super(props);
        this.state={
            todos:[
                
                // {id:100,desc:"I am from india",done:false,targetDate:new Date()},
                // {id:200,desc:"I am Ramesh",done:false,targetDate:new Date()},
                // {id:300,desc:"I am learning React",done:false,targetDate:new Date()},
                // {id:400,desc:"It is a full stack application",done:false,targetDate:new Date()},
            ],
            message:null
        }
        this.retrieveToDoList=this.retrieveToDoList.bind(this)
        this.deleteToDoItem=this.deleteToDoItem.bind(this)
        this.updateToDoItem=this.updateToDoItem.bind(this)
    }
    componentDidMount(){
        this.retrieveToDoList();
    }
    componentDidUpdate(){
        return true;
    }

    updateToDoItem(id){
        console.log("id---"+id)
        this.props.history.push(`/todos/${id}`);
    }

    deleteToDoItem(id){
        let userName=AuthenticationService.getLoggedInUserName()
        ToDoService.deleteToDoItem(userName,id)
        .then(response=>{
            console.log(response.data)
            this.setState({
                message:"The selected record deleted successfully"
            })
            //this.retrieveToDoList();
           
        })
        .catch(error=>{
            console.log(error)
            this.setState({
                message:"There is no ToDo item to delete."
            })
        })
       
    }

    retrieveToDoList(){
        let userName=AuthenticationService.getLoggedInUserName()
        ToDoService.retrieveAllToDos(userName)
        .then(response=>{
            console.log(response.data)
            this.setState({
                todos:response.data
            })
        })
    }
    render(){
        return(
            <div className="todolist">
           <h1> Welcome to my Todo List</h1><br/>
           {this.state.message && <div className="alert alert-success" >{this.state.message}</div>}
           {this.state.message && <div className="error"/>}  
           <div className="container">

                    <table className="table">
                        <thead>
                            <tr>
                            <th>Description</th>
                            <th>Is Completed?</th>
                            <th>Target Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map(
                                    todo=>
                                    
                                <tr key={todo.id}>                                   
                                    <td>{todo.desc}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{todo.targetDate.toString()}</td>
                                    <td><button className="btn btn-success" onClick={()=>this.updateToDoItem(todo.id)}>Update</button></td>
                                    <td><button className="btn btn-warning" onClick={()=>this.deleteToDoItem(todo.id)}>Delete</button></td>
                            </tr>
                            )                  
                            }
                        </tbody>
                    </table>
            </div>
            </div>
        )
    }
}

export default TodoListComponent;