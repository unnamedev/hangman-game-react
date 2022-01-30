import React, {useContext} from "react"
import {GlobalContext} from "../context/GlobalState"

const Notification = () => {
    const {showNotification} = useContext(GlobalContext)

    return <div className={`hangman__alert ${showNotification ? "show" : ""}`}>
        You have already entered this letter
    </div>
}


export default Notification