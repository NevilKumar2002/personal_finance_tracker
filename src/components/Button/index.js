import React from "react";
import "./style.css"
function Button({disabled,text, onClick, blue}){
    return(
        <div onClick={onClick} className={blue? "btn btn-blue": "btn"} disabled={disabled}>
            {text}
        </div>
    )
}
export default Button;