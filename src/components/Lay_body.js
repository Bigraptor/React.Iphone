import React, {Component} from "react";
import "../css/Lay_body.css";
import "../fontello/css/fontello.css";
import Phonebook from "./Phonebook.js";

class Laybody extends Component{
    constructor(props){
        super(props);
        this.state = {
            click:0,
            select : -1,
            contact : [{
                name : "♡♥뚜삐♥♡",
                phone : "486"
            },
            {
                name : "경찰서",
                phone : "112"
            }
        ]
        }
    };

    _click(){
        this.setState({
            ...this.state,
            click : 1
        });
    }

    _phoneclick(key){
        this.setState({
            ...this.state,
            select : key
        })
    }

    render(){

        const mapping = this.state.contact.map((a, i)=>{
            return <div className = "phonelist" key = {i} onClick = {()=>{this._phoneclick(i)}}>{a.name}</div>
        })

        const a = (
                <div>
                    <div className = "back_body"></div>
                    <div className = "back_dock">
                        <div className = "icon_phone" onClick = {()=>{this._click()}}></div>
                        <div className = "icon_message"></div>
                        <div className = "icon_katalk"></div>
                        <div className = "icon_melon"></div>
                    </div>
                </div>
        );

        const b = (
            <div id = "phone">
                <div id = "phone_body">
                    <div id = "plus">+</div>
                    <div id = "search">
                        <span>연락처</span>
                        <input type = "text" name = "search" placeholder = "검색"/>
                    </div>
                    <div>
                        {mapping}
                    </div>
                </div>
                <div className = "detail_undermenu">
                    <div className = "undermenu_icon">
                        <span className = "icon-star"></span>
                        <span className = "icon-clock"></span>
                        <span className = "icon-users"></span>
                        <span className = "icon-th"></span>
                        <span className = "icon-paper-plane"></span>
                    </div>
                    <div className = "undermenu_font">
                        <span id ="under_favor">즐겨찾기</span>
                        <span id ="under_recent">최근통화</span>
                        <span id ="under_phonebook">연락처</span>
                        <span id ="under_keypad">키패드</span>
                        <span id ="under_voice">음성사서함</span>
                    </div>
                </div>
            </div>
        );

    const abc = (this.state.click===0)? a: ((this.state.select=== -1)?b : <Phonebook
     contact = {this.state.contact[this.state.select]}/>);
        return(
          (abc)
        );
    }
}

export default Laybody;