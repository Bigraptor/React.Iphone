import React, {Component} from "react";
import "../css/Lay_up.css";
import "../wiba/css/fontello.css";

class Layup extends Component{

    render(){
        return(
            <div className = "lay_up">
                <span className = "icon-wifi">
                </span>
                <span id = "time">
                    12:00
                </span>
                <span className = "icon-bat-full">
                </span>
            </div>
        );
    }
}

export default Layup;