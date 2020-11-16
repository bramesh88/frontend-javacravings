import React, { Component } from 'react';

class ToDoComponent extends Component{

    constructor(props){
        super(props)
        this.back=this.back.bind(this)
        this.updateItem=this.updateItem.bind(this)
        this.createItem=this.createItem.bind(this)
    }

    back(){
        this.props.history.push("/todos")
    }
    updateItem(){
        console.log("In update")
    }

    createItem(){
        console.log("In create")
    }

    validate(){
       // let errors={}
    }
    render(){
        return(
            <div className="container">
                I am in todo app -{this.props.match.params.id}
                <br/> <br/>
                <button className="btn btn-success" onClick={()=>this.back()}>Back</button>
            </div>
        )
    }
}

 export default ToDoComponent;