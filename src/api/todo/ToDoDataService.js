import axios from 'axios'
class ToDoDataService{

    retrieveAllToDos(userName){
        console.log("Retrieve all todos");
        return axios.get(`http://localhost:8080/users/${userName}/todos`);
    }
    getToDoItem(userName,id){
        console.log("getToDoItem all todos");
        return axios.get(`http://localhost:8080/users/${userName}/todo/${id}`);
    }
    deleteToDoItem(userName,id){
        console.log("Retrieve all todos");
        return axios.delete(`http://localhost:8080/users/${userName}/todo/${id}`);
    }
    updateToDo(userName,todo){
        console.log("Retrieve all todos");
        return axios.put(`http://localhost:8080/users/${userName}/todo`);
    }
    createToDo(userName,todo){
        console.log("Retrieve all todos");
        return axios.post(`http://localhost:8080/users/${userName}/todo`);
    }
}

export default new ToDoDataService()