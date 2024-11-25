import './App.css';
import { useState, input } from "react";
import { ArcherContainer, ArcherElement } from "react-archer"
import './AboutUs.css'; // New CSS file for this page

import { Nav } from './Navbar';

export function AboutUs(props) {
    let [email, setEmail] = useState('');
    
    function onType(e) {
      setEmail(e.target.value);
    }

    function join() {
      
    }

    return (
      <div>
        <Nav />
        <div className="about-me-container">
          <h1 className="about-me-section-title">About Us</h1>
    
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

          <section className="final-info section">
            <div className="ci">
              <div className="half">
              <div><img src="https://i.ibb.co/L0Q1q0s/email.png" alt="" /></div>
              email@amukh1.dev
              </div>
              <div className="half">
              <div><img src="https://i.ibb.co/r3db9bN/phone.png" alt="" /></div>
              1-800-555-0199
              </div>
            </div>
            <div className="newsl">
              <div>Join our Newsletter!</div>
              <input name="myInput" onChange={onType} placeholder="Email"/>
              <button className="join" type="button">Join!</button>
            </div>
          </section>
    
          {/* Cards Section */}
          <section className="about-me-cards-section">
            <h2>Explore More On Our (Not So) Hidden Menu</h2>
            <div className="about-me-cards-container">
              <div className="about-me-card">
                <div className="about-me-card-image">
                <img src="https://media-cdn2.greatbritishchefs.com/media/xwpi1hrv/img74245.whqc_660x440q80.webp" alt="Vegan Pancakes" className="more"/>
                </div>
                <div className="about-me-card-content">
                  <h3>Vegan Raspberry, Almond, Cherry and Saffron Truffle</h3>
                  <p>Delight in the luxurious fusion of flavors with our vegan truffles, featuring tart raspberries, crunchy almonds, and sweet cherries infused with a hint of aromatic saffron. These handcrafted treats are coated in a velvety layer of dark chocolate, offering a perfect balance of sweetness and richness. Elegant and indulgent, they’re a decadent bite-sized dessert perfect for any occasion.

                  </p>
                </div>
              </div>
              <div className="about-me-card">
                <div className="about-me-card-image">
                  <img src="https://media-cdn2.greatbritishchefs.com/media/cacposlv/img74242.whqc_660x440q80.webp" alt="Vegan Eggnog" className="more"/>
                </div>
                <div className="about-me-card-content">
                  <h3>Vegan Espresso Crème Caramel With Pistachio Biscotti</h3>
                  <p>Experience the perfect pairing of bold and sweet with our vegan espresso crème caramel, a silky-smooth custard infused with rich espresso and topped with a luscious caramel glaze. Served alongside crunchy pistachio biscotti, this dessert offers a delightful contrast of textures and flavors. It’s a sophisticated treat that’s ideal for coffee lovers and dessert enthusiasts alike.

                  </p>
                </div>
              </div>
              <div className="about-me-card">
                <div className="about-me-card-image">
                  <img src="https://media-cdn2.greatbritishchefs.com/media/ucjf0hl3/img27057.whqc_660x440q80.webp" alt="Vegan Pumpkin Meringue Pie" className="more"/>
                </div>
                <div className="about-me-card-content">
                  <h3>Lavender and Blackberry Sorbet</h3>
                  <p>Refresh your palate with our lavender and blackberry sorbet, a vibrant blend of sweet, tangy blackberries and subtle floral lavender. Crafted with natural ingredients, this silky sorbet is light, refreshing, and bursting with garden-fresh flavors. Perfect for a warm day or as a cleansing finish to your meal, it’s a dessert that feels like a touch of nature in every spoonful.

                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
        </div>
      );
}