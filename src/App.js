import React from "react"

// Components
import Header from "./components/Header"
import Figure from "./components/Figure"
import WrongLetters from "./components/WrongLetters"
import Word from "./components/Word"
import Popup from "./components/Popup"
import Notification from "./components/Notification"

// Context
import {GlobalProvider} from "./context/GlobalState"

const App = () =>
    <GlobalProvider>
        <div className="hangman container">
            <Header/>
            <div className="hangman__main">
                <WrongLetters/>
                <Figure/>
                <Word/>
            </div>
            <Popup/>
            <Notification/>
        </div>
    </GlobalProvider>


export default App