import './BoxButton.css'
import React from "react";
import { useNavigate } from "react-router-dom";

function BoxButton({title, pageURL}) {

    const navigate = useNavigate();
   
    const movePages = () => {
        navigate(pageURL)
    };

    return (
        <div className="Box">
            <h2>{title}</h2>
            <button onClick={movePages}> Go to Page </button>
        </div>
    )
}

export default BoxButton

