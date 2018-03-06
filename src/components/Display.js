import React, {Component} from "react";
import Background from "./Background.js";
import "../css/Display.css";

class Display extends Component{
    render(){
        return(
            <div className = "display">
                <Background />
            </div>
        );
    }
}

export default Display;