import React, {useContext} from "react"
import {GlobalContext} from "../context/GlobalState"

const Word = () => {
    const {selectedWord, correctLetters} = useContext(GlobalContext)

    return <div className="hangman__word">
        {selectedWord !== null && selectedWord.split("").map((letter, idx) => (
            <span className="hangman__letter" key={idx}>
                {correctLetters.includes(letter) ? letter : ""}
            </span>
        ))}
    </div>
}

export default Word