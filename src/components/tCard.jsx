import './tCard.css'
import {
    useLocation
} from "react-router-dom";

import { useEffect, useState, useRef } from "react";
import { animated, useSpring } from '@react-spring/web'




export function Cardtestimonial(props) {   // props: name, comment
    return <div className="testi">
        <div className="t1">
            <div className="pfp"></div>
            <div className="name">Gordon Ramsay</div>
        </div>
        <div className="t2">Honestly, I thought it was going to be absolutely dreadful, but it turned out to be quite a pleasant surprise.</div>
    </div>
}