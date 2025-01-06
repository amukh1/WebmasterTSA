import './App.css'
import NS from './Nav.css'
import {
    useLocation, useNavigate
} from "react-router-dom";


import { useEffect, useState, useRef, button } from "react";

export function Nav(props) {
    const navigate = useNavigate();

    function toMenu() {
        navigate("/menu");
    }

    function toHome() {
        navigate("/");
    }

    function toProcess() {
        navigate("/process");
    }

    function toAbt() {
        navigate("/aboutus");
    }

    function toRef() {
        navigate("/reference");
    }

    return <div>
        <div className="bar">
                <div className="logo"  type="button" onClick={toHome}> <span className="vegangreen">V</span>egan <span className="vegangreen">V</span>illa</div>
                <div className="page" type="button" onClick={toMenu}>Menu</div>
                <div className="page" type="button" onClick={toProcess}>Our Process</div>
                {/* <img src="https://raw.githubusercontent.com/amukh1/WebmasterTSA/refs/heads/main/src/VV.png?token=GHSAT0AAAAAAC2QEKNESXLOP5JUMKDU4U6SZ2CCPWA" alt="" /> */}
                <div className="page" type="button" onClick={toAbt}>About Us</div>
                <div className="page" type="button" onClick={toRef}>Reference Page</div>
        </div>
    </div>
}