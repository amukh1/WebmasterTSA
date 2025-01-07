import './card.css'
import {
    useLocation
} from "react-router-dom";

import { useEffect, useState, useRef } from "react";
import { animated, useSpring } from '@react-spring/web'




export function Card(props) {
    const springs = useSpring({
        from: { x: -1000 },
        to: { x: 0 },
        config: { tension: 100, friction: 12 },
    
      })    
    return <animated.div className="card" style={{
        ...springs,
      }}>
        <div className="card-title">{props.title}</div>
        <div className="card-content">{props.content}</div>
        </animated.div>
}