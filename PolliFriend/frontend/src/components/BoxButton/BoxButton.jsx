import './BoxButton.css'
import React from "react";
import {Link } from "react-router-dom";

function BoxButton({title, pageURL}) {
    console.log(title)
    return (
        <div className="Box">
            <h2>{title}</h2>
            <Link to={pageURL}><button>
              Go to Page
            </button></Link>
        </div>
    )
}

export default BoxButton

