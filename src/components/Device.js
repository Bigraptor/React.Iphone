import React, {Component} from "react";
import "../css/Device.css";
import Display from "./Display.js";

class Device extends Component{
    render(){
        return(
            <div className = "device">
                <div className = "device_up">
                    <div id = "sec_light"><div id = "detect_light"></div></div>
                    <div id = "sec_sec"><div id = "sec_fcamera"></div><div id = "sec_speaker"></div></div>
                </div>
                <Display />
                <span id = "button_home"></span>
            </div>
        );
    }
}

export default Device;