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
    return <div>
        <div className="bar">
                <div className="logo"  type="button" onClick={toHome}>Vegan Villa</div>
                <div className="page" type="button" onClick={toMenu}>Menu</div>
                <div className="page">Additional Info</div>
                {/* <img src="https://raw.githubusercontent.com/amukh1/WebmasterTSA/refs/heads/main/src/VV.png?token=GHSAT0AAAAAAC2QEKNESXLOP5JUMKDU4U6SZ2CCPWA" alt="" /> */}
                <div className="page">About Us</div>
        </div>
    </div>
}