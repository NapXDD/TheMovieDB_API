import { useRef, useState } from "react"
import "./togglebutton.css"

export default function ToggleButton(){

    const handleButton1 = () => {
        let button1 = document.querySelector(".button1")
        let button2 = document.querySelector(".button2")
    }

    const handleButton2 = () => {
        let button1 = document.querySelector(".button1")
        let button2 = document.querySelector(".button2")
    }

    return(
        <div className="toggle-button-container">
            <div className="toggle-button-content">
                <div className="slide-tracker button1" onClick={handleButton1}>Today</div>
                <div className="button2" onClick={handleButton2}>This week</div>
            </div>
        </div>
    )
}