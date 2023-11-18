import React from "react";
import "./style.css"
function Input({label, state, setState, placeholder, type}){
    return(
        <div className="input-wrapper">
        <p className="input-label">{label}</p>
        <input  className="input-field" type={type} value={state} onChange={(e)=>setState(e.target.value)} placeholder={placeholder}/>
        </div>
    )
}
export default Input;