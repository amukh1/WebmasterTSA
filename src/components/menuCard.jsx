import '../App.css'
import {
    useLocation
} from "react-router-dom";

import { useEffect, useState, useRef } from "react";
import { animated, useSpring } from '@react-spring/web'




export function MenuCard(props) {

   const [show,setShow] = useState(0)

   const [spring, setSpring] = useSpring(() => ({
    x: 0,opacity:1,
    from: { x:-100,opacity:0 },
    config: { duration: 250 }
}));

   function swap() {
    setShow(!show);
   }


  useEffect(()=>{ setSpring({ x: show ? 0 : -100, opacity: show ? 1 : 0 });
  }, [show, setSpring]);

   return <div className="about-me-card" onMouseEnter={() => {setShow(1)}} onMouseLeave={() => {setShow(0)}}>
                    <div className="about-me-card-image">
                    <img src={props.picture} alt="Menu Item" className="more"></img>
                    </div>
                    <div className="about-me-card-content">
                      <h3>{props.name}</h3>
                      {(show == true) ?<animated.p style={spring}> {props.description} </animated.p>: ""}
                    </div>
                  </div>
}

/*
<div className="about-me-card">
                    <div className="about-me-card-image">
                    <img src={item.picture} alt="Menu Item" className="more"/>
                    </div>
                    <div className="about-me-card-content">
                      <h3>{item.name}</h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
*/