import React, { Component } from 'react';
import "./CarStyle.css"



export default class CarComponent extends Component {
    state = {bugatti: {
                make: "Bugatti",
                model: "La Voiture Noire",
                engine: "v16",
                horsepower: "1500",
                price: "19000000",
                image: [
                  {
                    primary: "https://uncrate.com/p/2021/06/bugatti-la-voiture-noire-1.jpg",
                    secondary:"https://assets.newatlas.com/dims4/default/f863a29/2147483647/strip/true/crop/1920x1029+0+0/resize/1440x772!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Farchive%2Fbugatti-la-voiture-noire-21.jpeg",
                  },
                ],
                transmission: "7 speed dual clutch",
                topSpeed: [{ US: "261", Metric: "420" }],
        },
        changePicture: true,
        setPic: "https://uncrate.com/p/2021/06/bugatti-la-voiture-noire-1.jpg",
    };
    PictureChange = () => {
        let pic = this.state.changePicture
        ? this.state.bugatti.image[0].secondary : this.state.bugatti.image[0].primary ;
        this.setState({setPic: pic, changePicture: !this.state.changePicture});
    };



    render() {
        return <div className="carCard">
            <h2 className="carMake">{this.state.bugatti.make}</h2>
            <h3 classname="carName">{this.state.bugatti.model}</h3>
            <img src={this.state.setPic}/>
            <button onClick={this.PictureChange}>Change Picture</button>
            <h3 className="price">Price: {this.state.bugatti.price}</h3>
            <div className="specs">
                <p>Engine: {this.state.bugatti.engine}</p>
                <p>Horsepower: {this.state.bugatti.horsepower}</p>
                <p>Transmission: {this.state.bugatti.transmission}</p>
                <p>Top Speed: US: {this.state.bugatti.topSpeed[0].US}   Metric: {this.state.bugatti.topSpeed[0].Metric}</p>
            </div>
        </div>;
    }
}