import './tCard.css'
import {
    useLocation
} from "react-router-dom";

import { useEffect, useState, useRef } from "react";
import { animated, useSpring } from '@react-spring/web'
import { useInView } from 'react-intersection-observer';



export function Cardtestimonial(props) {   // props: name, comment

    const [ref, inView] = useInView({
        triggerOnce: true, // Trigger only once when the element comes into view
        threshold: 0.1, // Fire when 10% of the element is visible
      });

    const [spring, api] = useSpring(
        () => ({
          from: { opacity: 0 },
          to: { opacity: 100 },
          delay: props.delay,
        }),
        []
      )

  

      

    return <animated.div className="testi" style={spring}>
        <div className="t1">
            {/* <div className="pfp"></div> */}
            <img src={props.pfp} alt="" className="pfp" />
            <div className="name">{props.name}</div>
        </div>
        <div className="stars">5/5 stars</div>
        <div className="t2">"{props.comment}"</div>
    </animated.div>
}