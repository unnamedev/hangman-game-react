import {createContext, useEffect, useReducer} from "react"
import {AppReducer} from "./AppReducer"
import {getRandomWord} from "../helpers/helpers"
import axios from "axios"

// Initial State
const initialState = {
    playable: true,
    correctLetters: [],
    wrongLetters: [],
    showNotification: false,
    selectedWord: null
}

// Global Context
export const GlobalContext = createContext(initialState)

// Provider
export const GlobalProvider = ({children}) => {
    // Reducer
    const [state, dispatch] = useReducer(AppReducer, initialState)

    // Get word from API
    useEffect(() => {
        try {
            (async ()=> {
                const response = await axios.get("https://random-word-api.herokuapp.com/word")
                dispatch({type: "FETCH_WORD", payload: response.data[0]})
            })()
        } catch (e) {
            dispatch({type: "FETCH_WORD", payload: getRandomWord})
        }
    }, [])

    // Handle keydown
    useEffect(() => {
        /**
         * Handle Keydown
         * @param event
         */
        const handleKeydown = (event) => {
            // Store event key, keyCode
            const {key, keyCode} = event
            // Check condition
            if (state.playable && keyCode >= 65 && keyCode <= 90) {
                const letter = key.toLowerCase()
                if (state.selectedWord.includes(letter)) {
                    if (!state.correctLetters.includes(letter)) {
                        dispatch({type: "SET_CORRECT_WORD", payload: letter})
                    } else {
                        dispatch({type: "SHOW_NOTIFICATION", payload: true})
                        setTimeout(() => dispatch({type: "SHOW_NOTIFICATION", payload: false}), 2000)
                    }
                } else {
                    if (!state.wrongLetters.includes(letter)) {
                        dispatch({type: "SET_WRONG_WORD", payload: letter})
                    } else {
                        dispatch({type: "SHOW_NOTIFICATION", payload: true})
                        setTimeout(() => dispatch({type: "SHOW_NOTIFICATION", payload: false}), 2000)
                    }
                }
            }
        }

        window.addEventListener("keydown", handleKeydown)

        return () => window.removeEventListener("keydown", handleKeydown)
    }, [state.selectedWord, state.correctLetters, state.wrongLetters, state.playable])

    /**
     * Set playable value
     * @param playable
     */
    const setPlayable = (playable) => dispatch({type: "SET_PLAYABLE", payload: playable})

    /** Play again */
    const playAgain = () => {
        setPlayable(true)
        try {
            (async ()=> {
                const response = await axios.get("https://random-word-api.herokuapp.com/word")
                dispatch({type: "REPLAY", payload: response.data[0]})
            })()
        } catch (e) {
            dispatch({type: "REPLAY", payload: getRandomWord})
        }
    }

    return (
        <GlobalContext.Provider value={{...state, playAgain, setPlayable}}>
            {children}
        </GlobalContext.Provider>
    )
}