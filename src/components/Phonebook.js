import React, {Component} from "react";
import "../css/Phonebook.css";

class Phonebook extends Component{
    render(){

        const have = (<div>
            <div id="top"><span>《연락처</span><span>편집</span></div>
            <div id = "detailtitle">
                <div className = "detail_name">
                    {this.props.contact.name}
                </div>
                <div className = "detail_menu">
                    <span className = "icon-comment"></span>
                    <span className = "icon-phone"></span>
                    <span className = "icon-videocam"></span>
                    <div id = "iconfont">
                        <span id = "font_cell">휴대전화</span>
                        <span id = "font_call">통화</span>
                        <span id = "font_ft">FaceTime</span>
                    </div>
                </div>
            </div>
            <div className = "detail_phone">
                <p>휴대전화<div id = "phone_num">{this.props.contact.phone}</div></p>
            </div>
            <div className = "detail_facetime">
                FaceTime
                <span className = "icon-videocam"></span>
                <span className = "icon-phone"></span>
            </div>
            <div className = "detail_memo">
                메모
            </div>
            <div className = "detail_send">
                메시지보내기
            </div>
            <div className = "detail_share">
                연락처 공유
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
        </div>);

        return(
            <div>
            {have}
            </div>
        );
    }
}


export default Phonebook;