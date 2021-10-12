import React, { useContext } from 'react'
import Sun from "../../img/sun.png"
import Moon from "../../img/moon.png"
import "./toggle.css"
import { ThemeContext } from '../../context'

function Toggle() {

    const theme = useContext(ThemeContext)
    
    const handleClick = () => {
        theme.dispatch({type: "TOGGLE"})
    }


    return (
        <div className="toggle">
            <img src={Moon} alt="moon" className="t-icon" />
            <img src={Sun} alt="sun" className="t-icon" />
            <div style={{left: theme.state.darkMode ? 25 : 0}} className="t-button" onClick={handleClick}></div>
        </div>
    )
}

export default Toggle
