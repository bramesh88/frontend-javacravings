import React from 'react';
import './JavaComponent.css';
import data from '../../data/java.json'

function JavaComponent(){
    const newdata=data.map((data)=>{
       // console.log(data.id + data.name)
    }
    )
    return(
        <div className="container">      
            <div id="menu">
                <a target="_blank" href="#home" className="training">Java Training</a> 
                <div className="leftmenu2">
                <h2 className="spanh2"><span className="spanh2">Java Tutorial</span></h2>
                </div>
              
               { data.map((item)=>{
                     <div className="leftmenu">
                 {  console.log(item.id + item.name)}
                  
                    <a href="java">{item.name}</a>{item.name}
                    </div>
                
                  
                }
                )
                
            }
             
               
                <div className="leftmenu2">
                <h2 className="spanh2"><span className="spanh2">Control Statements</span></h2>
                </div>
            </div>
            <div className="onlycontent" >
                It is java content
            </div>
    </div>
    )
  
}

export default JavaComponent