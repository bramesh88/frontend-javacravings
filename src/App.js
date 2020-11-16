import './App.css';
import './bootstrap.css';
import React,{ Component } from 'react';
import JavaCravings from './components/javacravings/JavaCravings.jsx';



class App extends Component{
  render(){
    return (
      <div className="App">
        
         <JavaCravings/>       
  
    </div>
    );
  }
}

export default App;
