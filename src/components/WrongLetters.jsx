import React, {useContext} from "react"
import {GlobalContext} from "../context/GlobalState"

const WrongLetters = () => {
    const {wrongLetters} = useContext(GlobalContext)

    return <div className="hangman__wrong">
        {wrongLetters.length > 0 &&
            <div className="hangman__wrong-top">
                <p className="hangman__wrong-title">Wrong letters</p>
            </div>}
        <div className="hangman__wrong-letters">
            {wrongLetters
                .map((letter, i) => <span className="hangman__wrong-letter" key={i}>{letter}</span>)
                .reduce((prev, curr) => prev === null ? [curr] : [prev, curr], null)}
        </div>
    </div>
}

export default WrongLetters
