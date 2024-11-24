import './tCard.css'
import {
    useLocation
} from "react-router-dom";

import { useEffect, useState, useRef } from "react";
import { animated, useSpring } from '@react-spring/web'




export function Cardtestimonial(props) {   // props: name, comment
    return <div className="testi">
        <div className="t1">
            {/* <div className="pfp"></div> */}
            <img src={props.pfp} alt="" className="pfp" />
            <div className="name">{props.name}</div>
        </div>
        <div className="stars">5/5 stars</div>
        <div className="t2">"{props.comment}"</div>
    </div>
}