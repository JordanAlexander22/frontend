import React from 'react'

export default function Buttons(props) {
    return (
        <div>
            <button className="1st-btn">{props.btntext}</button>
            <button className="2nd-btn">{props.btn2text}</button>
        </div>
    )
}
