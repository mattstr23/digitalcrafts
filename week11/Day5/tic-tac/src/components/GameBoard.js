import React, {useState} from 'react'
import PlaySquare from './PlaySquare'
import CalculateWinner from './WinnerCalc';
import '../App.css'

export default function GameBoard() {

    const [square, setSquare] = useState(Array(9).fill(null));
    const [token, setToken] = useState(true);

    const playerChoice = (i) =>{
        const play = square.slice();

        if(play[i] === null) {
            play[i] = token ? "X":"O";
            setSquare(play);
            setToken(!token);
        }
        else{
            alert("This Move Has Been Made")
        }
    }
    
    const userPlay = (i) =>{
        return(
            <PlaySquare val={square[i]} userClick={()=>playerChoice(i)}/>
        )
    }

    const winner = CalculateWinner(square)

    return (
        <div className="gameBoard">
            <div className="gameRow">
                {userPlay(0)}
                {userPlay(1)}
                {userPlay(2)}
            </div>
            <div className="gameRow">
                {userPlay(3)}
                {userPlay(4)}
                {userPlay(5)}
            </div>
            <div className="gameRow">
                {userPlay(6)}
                {userPlay(7)}
                {userPlay(8)}
            </div>
            
        </div>
    )
}
