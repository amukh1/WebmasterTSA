import './App.css'
import NS from './Nav.css'
import {
    useLocation
} from "react-router-dom";

import { useEffect, useState, useRef, button } from "react";

export function Nav(props) {
    return <div>
        <div className="bar"> 
            <div className="bar1">
                <div>LOGO</div>
                <p>Menu</p>
                <p>About Us</p>
            </div>
            <div className="bar2">
                <button>Location</button>
                <button>Contact</button>
            </div>
        </div>
    </div>
}