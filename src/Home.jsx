import './App.css'
import {
    useLocation
} from "react-router-dom";

import { useEffect, useState, useRef } from "react";

import {Nav} from './Navbar'

export function Home(props) {

    return <div>
        <title>Home | Vegan Villa</title>
        <Nav/>
        <div className="landing"></div>
        {/* eee */}
        {/* <img src="http://www.msn.com/en-us/foodanddrink/recipes/chicken-with-crushed-harissa-chickpeas/ar-BB1j9wiP?apiversion=v2&noservercache=1&domshim=1&renderwebcomponents=1&wcseo=1&batchservertelemetry=1&noservertelemetry=1" alt=""/> */}
        {/* <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTgfjx-_exPt9OeXtAIkN6w4kWH7L7gzlOA7xGASCeoNtrtgaLQ" alt=""/> */}
    </div>
}