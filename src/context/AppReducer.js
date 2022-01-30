export const AppReducer = (state, action) => {
    switch (action.type) {
        case "FETCH_WORD" :
            return {
                ...state,
                selectedWord: action.payload
            }
        case "SET_CORRECT_WORD" :
            return {
                ...state,
                correctLetters: [...state.correctLetters, action.payload]
            }
        case "SET_WRONG_WORD" :
            return {
                ...state,
                wrongLetters: [...state.wrongLetters, action.payload]
            }
        case "SHOW_NOTIFICATION" :
            return {
                ...state,
                showNotification: action.payload
            }
        case "SET_PLAYABLE" :
            return {
                ...state,
                playable: action.payload
            }
        case "REPLAY" :
            return {
                ...state,
                correctLetters: [],
                wrongLetters: [],
                selectedWord: action.payload
            }
        default:
            return state
    }
}