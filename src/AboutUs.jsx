import './App.css';
import { useState, input } from "react";
import { ArcherContainer, ArcherElement } from "react-archer"
import './AboutUs.css'; // New CSS file for this page

import { Nav } from './Navbar';
import { Card } from './components/Card'
import { Footer } from './components/footer'

export function AboutUs(props) {
    let [email, setEmail] = useState('');
    let [message, setMessage] = useState('');
    
    function onType(e) {
      setEmail(e.target.value);
    }

    function onType2(e) {
      setMessage(e.target.value);
    }

    function join() {
      fetch('https://discord.com/api/webhooks/1310457717621522534/VOZIXBD7_YPlzOmcS8aCK_hJEclwBXOLy3JDCVqg7uMdN7CgxEFAGOuPoGQoxibsDo-C', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          content: `email: **${email}**; message: **${message}** <@696953667403644938> <@1004908596036915311>`
        })
      });
    }

    return (
      <div>
        <title>About Us | Vegan Villa</title>
        <Nav />
        <div className="about-me-container">
          <h1 className="about-me-section-title">About Us</h1>
          <Card/>
          {/* Mission Section */}
          <section className="about-me-mission-section">
            <p class="mission">Our Mission</p>
            <p class="mission-disc">
              At Vegan Villa, our mission is to create delicious, plant-based meals that celebrate freshness, sustainability, 
              and community. We are committed to supporting local farmers and using eco-friendly practices to deliver wholesome 
              food that nourishes both people and the planet. By fostering a welcoming space, we aim to inspire a deeper 
              connection to the food we eat and the impact it has on the world around us.
            </p>
          </section>
    
          {/* Sliding Pictures Section */}
          <section className="about-me-sliding-pictures-section">
            <h2>Our Team</h2>
            <div className="about-me-slider">
              <div className="about-me-slide">Aditya Mukherjee</div>
              <div className="about-me-slide">Gautham Rajanikanth</div>
              <div className="about-me-slide">Parth Padole</div>
              <div className="about-me-slide">Shaurya Khajanchi</div>
              <div className="about-me-slide">Shirish Pradeep</div>
            </div>
          </section>

          <section className="final-info section smaller">
            <div className="ci">
              <div className="half">
              <div><img src="https://i.ibb.co/L0Q1q0s/email.png" alt="" draggable={false}/></div>
              email@amukh1.dev
              </div>
              <div className="half">
              <div><img src="https://i.ibb.co/r3db9bN/phone.png" alt="" draggable={false}/></div>
              1-800-555-0199
              </div>
            </div>
            <div className="newsl">
              <div>Join our Newsletter!</div>
              <input name="Email" onChange={onType} placeholder="Email"/>
              <input name="Mesage" onChange={onType2} placeholder="Message"/>
              <button className="join" type="button" onClick={join}>Join!</button>
              <div className="PS">P.S. We can actually see your message, and we will respond!</div>
            </div>
          </section>
    
          
        </div>
        <Footer />
        </div>
      );
}