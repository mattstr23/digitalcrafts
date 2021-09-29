import React, { Component } from 'react'

export default class MyProfile extends Component {
    state = {
        firstName: "Matthew",
        lastName: "Valicoff",
        city: "Tomball",
        profilePic: ""
    };
    changeCity = () => {
        let newCity = "St. Louis";
        this.setState({ city : newCity });
    };
    render() {
        return <div>
            <p>{this.state.firstName}</p>
            <p>{this.state.lastName}</p>
            <p>{this.state.city}</p>
            <p>{this.state.profilePic}</p>
            <button onClick={this.changeCity}>Change City</button>
        </div>;
    
    }
}