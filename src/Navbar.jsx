import './App.css'
import NS from './Nav.css'
import {
    useLocation
} from "react-router-dom";

import { useEffect, useState, useRef, button } from "react";

export function Nav(props) {
    return <div>
        <div className="bar">
                <div className="logo">Vegan Villa</div>
                <div className="page">Menu</div>
                <div className="page">Additional Info</div>
                {/* <img src="https://raw.githubusercontent.com/amukh1/WebmasterTSA/refs/heads/main/src/VV.png?token=GHSAT0AAAAAAC2QEKNESXLOP5JUMKDU4U6SZ2CCPWA" alt="" /> */}
                <div className="page">About Us</div>
        </div>
    </div>
}