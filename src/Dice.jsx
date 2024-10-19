import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix } from '@fortawesome/free-solid-svg-icons';
import './App.css';

const DiceIcon = [ faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix ];

export default function Dice() {
    const [dice1, setDice1] = useState(0);
    const [dice2, setDice2] = useState(0);
    const [rolling, setRoll] = useState(false);

    const rolldice = () => {
        setRoll(true);  // Set rolling to true
        setTimeout(() => {
            const newDice1 = Math.floor(Math.random() * 6);
            const newDice2 = Math.floor(Math.random() * 6);
            setDice1(newDice1);
            setDice2(newDice2);
            setRoll(false);  // Set rolling back to false after rolling completes
        }, 1000);  // Simulate 1 second of rolling
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Dice Game</h1>
            <div style={{ fontSize: "100px", display: "inline-block", padding: '1em', alignContent: 'center' }}>
                <div><FontAwesomeIcon icon={DiceIcon[dice1]} className={rolling ? "rolling" : ""} /></div>
                <FontAwesomeIcon icon={DiceIcon[dice2]} className={rolling ? "rolling" : ""} />
                <div>
                    <button 
                        onClick={rolldice} 
                        style={{ fontSize: "27px", borderRadius: "10px", padding: '1em' }}
                        disabled={rolling}
                    >
                        {rolling ? 'Rolling...' : 'Roll Dice'}
                    </button>
                </div>
            </div>
            <h1>
                It is number <big>{dice1 + 1}</big> and <big>{dice2 + 1}</big>.
            </h1>
        </div>
    );
}
