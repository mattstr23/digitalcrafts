import React, { Component } from 'react';

class Card extends Component {
    state = {
        flip: false,
    };

    flipFunction = () => {
        this.setState({
            flipped: !this.state.flipped,
        });
    };

    render() {
        const {id, name, hp, sprites } = this.props.pokemon;
        const {flipped} = this.state;
        const deletePoke = this.props.deletePoke
        return (
            <div className="pokeCard">
                <div className="header">
                    <h5>{id}</h5>
                    <h3>{name.toUpperCase()}</h3>
                </div>
                <img onMouseEnter={this.flipFunction} onMouseLeave={this.flipFunction} src={flipped ? sprites.back: sprites.front} />
                <h4>Health: {hp}</h4>
                <button onClick={() => {deletePoke(id)}}>Remove</button>

            </div>
        )
    }

}

export default Card;