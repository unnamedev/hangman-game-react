import React, {useContext, useEffect} from "react"
import {checkWin} from "../helpers/helpers"
import {GlobalContext} from "../context/GlobalState"

const Popup = () => {
    const {correctLetters, wrongLetters, selectedWord, playAgain, setPlayable} = useContext(GlobalContext)
    let finalMessage = ""
    let finalMessageRevealWord = ""
    let playable = true

    if (selectedWord !== null) {
        if (checkWin(correctLetters, wrongLetters, selectedWord) === "win") {
            finalMessage = "Congratulations! You won! 😃"
            playable = false
        } else if (checkWin(correctLetters, wrongLetters, selectedWord) === "lose") {
            finalMessage = "Unfortunately you lost. 😕"
            finalMessageRevealWord = `...the word was: ${selectedWord}`
            playable = false
        }
    }

    useEffect(() => {
        setPlayable(playable)
    }, [])

    return (
        <div className="hangman__overlay" style={finalMessage !== "" ? {display: "flex"} : {}}>
            <div className="hangman__popup">
                <h2 className="hangman__popup-title">{finalMessage}</h2>
                <p className="hangman__popup-words">{finalMessageRevealWord}</p>
                <button className="hangman__popup-button" onClick={playAgain}>Play Again</button>
            </div>
        </div>
    )
}

export default Popup