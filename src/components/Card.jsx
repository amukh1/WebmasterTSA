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
        <div className="card-content">Vegan Villa is a vibrant, plant-based haven nestled in the heart of the city, offering an wide range of menu items made entirely from fresh, sustainable, and locally sourced ingredients. The restaurant features a cozy interior with natural wood accents, lush greenery, and soft ambient lighting, creating a welcoming space for all diners. Signature dishes include innovative twists on classics, such as jackfruit tacos, creamy cashew alfredo, and decadent vegan cheesecake. A carefully curated drink menu complements the fare, with organic wines, craft mocktails, and smoothies packed with superfoods. Vegan Villa prides itself on fostering a community of health-conscious diners while promoting eco-friendly practices and ethical dining.</div>
        </animated.div>
}