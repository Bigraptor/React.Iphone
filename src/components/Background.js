import React, {Component} from "react";
import "../css/Background.css";
import Layup from "./Lay_up.js";
import Laybody from "./Lay_body.js";

class Background extends Component{

    render(){
        return(
        <div>
            <Layup />
            <Laybody />
        </div>
        );
    }
}

export default Background;