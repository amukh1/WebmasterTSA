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
        <div className="card-title">Welcome to Vegan Villa!</div>
        <div className="card-content">Vegan Villa is a vibrant, plant-based haven based in Seven Springs, PA. It offers a wide range of menu items made entirely from fresh, sustainable, and locally sourced ingredients. The restaurant features a cozy interior with natural wood accents, lush greenery, and soft ambient lighting, creating a welcoming space for all diners. Signature dishes include innovative twists on classics, such as buffalo cauliflower wings, vegan lasagna, and decadent vegan cheesecake. A drink menu of smoothies, shakes, and other creations have been perfected over the years. Vegan Villa prides itself on fostering a community of health-conscious diners while promoting eco-friendly practices and ethical dining.</div>
        </animated.div>
}