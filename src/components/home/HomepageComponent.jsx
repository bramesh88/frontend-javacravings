import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class HomepageComponent extends Component{
    render(){
        return(
            <div className="container">
                <h1>Welcome to Cravings of Java</h1>
            Welcome to Mr. - {this.props.match.params.name}. Click <Link to="/javaTutorial"> here</Link> to see tutorials
            </div>
        )
    }
}
export default HomepageComponent