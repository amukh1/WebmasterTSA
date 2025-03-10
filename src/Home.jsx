import './App.css'

import { useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { animated, useSpring } from '@react-spring/web'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { useNavigate } from "react-router-dom";

import { Nav } from './Navbar'
import { Footer } from './components/footer'
import { Card } from './components/Card'
import { Cardtestimonial } from './components/tCard'
import EmblaCarousel from './components/EmblaCarousel';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export function Home(props) {

    const [spring, setSpring] = useSpring(() => ({
        opacity: 1,
        from: { opacity: 0 },
    }));


    const phrases = ["Lettuce Serve You the Best Vegan Food Ever!", 
        "Turnip the Flavor, Carrot About Your Health!",
        "Our Food Will Leaf You Wanting More.",
        "Think Outside the Barn",
        "From Farm to Table, It’s Unbe-leaf-able!",
        "Peas join us for a meal you’ll never forget.",
        "Rooted in Flavor",
        "Harvesting Happiness Daily"
        ]
    // let phrase = phrases[Math.floor(Math.random()*phrases.length)]
    let [phrase, setPhrase] = useState(phrases[Math.floor(Math.random()*phrases.length)])
    let [phraseDiv, setPhraseDiv] = useState(<animated.div className="line" style={spring}>- {phrases[Math.floor(Math.random()*phrases.length)]} -</animated.div>)
    useEffect(() => {
        const interval = setInterval(() => {
            setPhrase(phrases[Math.floor(Math.random()*phrases.length)]);

        }, 3000);
        // const interval = setInterval(() => setPhraseDiv(<animated.div className="line" style={spring}>- {phrases[Math.floor(Math.random()*phrases.length)]} -</animated.div>), 3000);
        return () => {
          clearInterval(interval);
        };
      }, [setPhrase]);
    return <div>
        <title>Home | Vegan Villa</title>
        <Nav/>
        <div className="section land">
            <animated.div className="line" style={spring}>- {phrase} -</animated.div>
            {/* {phraseDiv} */}
        </div>
        <div className="section slidefood">
            <EmblaCarousel slides={[1, 2, 3]} options={{ loop: true }}/>
        </div>
        <div className="section location">
            {/* next section */}
            Hours: 7 AM - 11 PM All Week 

            <br/>

            <a href="https://maps.app.goo.gl/iMCeDV7pGCdsLCAv5" target="_blank">
                Location: 3784 PA-31, Donegal, PA 15628
            </a>

            {/* Embed the map here */}
            <div className="map">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d792.6035062468034!2d-79.36604788283366!3d40.10165976901807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1732402403142!5m2!1sen!2sus" 
                    width="600" 
                    height="450" 
                    style={{ border: 0 }}
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    >
                    
                </iframe>
            </div>
        </div>

        <div className="section testimonials">
            <Cardtestimonial name="Gordon Ramsay" comment="Honestly, I thought it was going to be absolutely dreadful, but it turned out to be quite a pleasant surprise." pfp="https://i.imghippo.com/files/ttn9319MVg.png" delay={1}/>
            <Cardtestimonial name="Larry" comment="Wow! Easily the best vegan food I have ever had!" pfp="https://i.imghippo.com/files/ttn9319MVg.png" delay={2}/>
            <Cardtestimonial name="LeBron James" comment="I gotta say that that was some of the best food I have ever had, and I'm going to be a frequent visitor." pfp="https://i.imghippo.com/files/ttn9319MVg.png" delay={3}/>
            
        </div>

        {/* eee */}
        {/* <img src="http://www.msn.com/en-us/foodanddrink/recipes/chicken-with-crushed-harissa-chickpeas/ar-BB1j9wiP?apiversion=v2&noservercache=1&domshim=1&renderwebcomponents=1&wcseo=1&batchservertelemetry=1&noservertelemetry=1" alt=""/> */}
        {/* <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTgfjx-_exPt9OeXtAIkN6w4kWH7L7gzlOA7xGASCeoNtrtgaLQ" alt=""/> */}
    
        <Footer/>
    </div>
}