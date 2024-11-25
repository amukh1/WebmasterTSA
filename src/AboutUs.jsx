import './App.css';
import { useState } from "react";
import { ArcherContainer, ArcherElement } from "react-archer"
import './AboutUs.css'; // New CSS file for this page

import { Nav } from './Navbar';

export function AboutUs(props) {
    return (
      <div>
        <Nav />
        <div className="about-me-container">
          <h1 className="about-me-section-title">About Us</h1>
    
          {/* Mission Section */}
          <section className="about-me-mission-section">
            <p class="mission">Our Mission</p>
            <p>
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
              <div className="about-me-slide">Aditya</div>
              <div className="about-me-slide">Gautham</div>
              <div className="about-me-slide">Parth</div>
              <div className="about-me-slide">Shaurya</div>
              <div className="about-me-slide">Shirish</div>
            </div>
          </section>
    
          {/* Cards Section */}
          <section className="about-me-cards-section">
            <h2>Explore More On Our (Not So) Hidden Menu</h2>
            <div className="about-me-cards-container">
              <div className="about-me-card">
                <div className="about-me-card-image">Image 1</div>
                <div className="about-me-card-content">
                  <h3>Card Title 1</h3>
                  <p>Placeholder for additional text or paragraphs related to this card.</p>
                </div>
              </div>
              <div className="about-me-card">
                <div className="about-me-card-image">Image 2</div>
                <div className="about-me-card-content">
                  <h3>Card Title 2</h3>
                  <p>Placeholder for additional text or paragraphs related to this card.</p>
                </div>
              </div>
              <div className="about-me-card">
                <div className="about-me-card-image">Image 3</div>
                <div className="about-me-card-content">
                  <h3>Card Title 3</h3>
                  <p>Placeholder for additional text or paragraphs related to this card.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
        </div>
      );
}