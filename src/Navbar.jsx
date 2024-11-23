import './App.css'
import NS from './Nav.css'
import {
    useLocation
} from "react-router-dom";

import { useEffect, useState, useRef, button } from "react";

export function Nav(props) {
    return <div>
        <div className="bar">
                    
                <p>Menu</p>
                <p>About Us</p>
                <img src="https://raw.githubusercontent.com/amukh1/WebmasterTSA/refs/heads/main/src/VV.png?token=GHSAT0AAAAAAC2NU56ROU6UL7RYY7DUFB46Z2BKDLQ" alt="" />
                <p>Location</p>
                <p>Contact</p>
        </div>
    </div>
}