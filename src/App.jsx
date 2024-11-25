import './App.css'

import {
  HashRouter as Router,
  Route,
  Routes,
  useLocation
} from "react-router-dom";
import { useEffect, useState, useRef } from "react";
// import { withRouter } from "react-router";

import { Home } from './Home'
import { Menu } from './Menu'
import { Additional } from './Additional'
import { AboutUs } from './AboutUs'
import { Nav } from './Navbar'

export default function App() {
  return (
    <main>
      {/* <Nav/> */}
      <nav>
      <Router>
        <Routes>
          <Route path="/menu" element={<Menu/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/additional" element={<Additional/>} />
          <Route path="/aboutus" element={<AboutUs/>} />
        </Routes>
      </Router>
      </nav>
    </main>
  )
}
