import "./topbar.scss";
import {WhatsApp, Mail} from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Yuky Nawanjana.</a>
                    <div className="itemContainer">
                        <WhatsApp className="icon" />
                        <span>+94-703088177</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon" />
                        <span>yasirunawanjana70@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                   <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                       <span className="line1"></span>
                       <span className="line2"></span>
                       <span className="line3"></span>
                   </div>
                </div>
            </div>
        </div>
    )
}
