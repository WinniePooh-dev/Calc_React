import React from "react";
import ReactDOM from "react-dom";
import Master from "./Master";

const div = document.createElement("div");

window.onload = function()
{
    document.body.appendChild(div);    
    ReactDOM.render(<Master/>, div);
}
