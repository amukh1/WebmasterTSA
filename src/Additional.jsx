import './App.css';
import { useState } from "react";
import { ArcherContainer, ArcherElement } from "react-archer"
import './OurProcess.css'; // Import the CSS file for styling

import { Nav } from './Navbar';
import { Footer } from './components/footer'

export function Additional(props) {
    return (
        <div>
            <title>Our Process | Vegan Villa</title>
            <Nav />
            <div className="our-process-container">
                <h1 className="section-title">Our Process</h1>

                <section className="process-section">
                    <h2>Farm-to-table Process</h2>
                    <div className="process-content">
                        <div className="process-text">
                            <p>
                                The farm-to-table process begins with sourcing fresh, seasonal produce directly from local farms, ensuring ingredients are at peak quality. Farmers grow crops and raise livestock using sustainable, eco-friendly practices, minimizing the environmental impact. Once harvested, the produce is transported quickly, often within a day, to maintain freshness and reduce the carbon footprint. Local suppliers deliver directly to restaurants or markets, cutting out intermediaries and ensuring transparency in sourcing.
                            </p>
                            
                            <p>
                                At the restaurant, chefs craft dishes around what’s available, emphasizing seasonal flavors and reducing food waste. The short supply chain means fewer preservatives are needed, resulting in healthier, more natural meals. Diners enjoy food that reflects the local region, supporting small farmers and boosting the local economy. Any food scraps or leftovers are often composted or repurposed, completing the sustainability loop.
                            </p>
                        </div>
                        <div className="process-image">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQej6T2IXgX9mSPRFEdzmP4Ex951iUz2tL8MQ&s" alt="Farm-to-table truck" />
                        </div>
                    </div>
                </section>

                <section className="process-section1">
                    <h2>Preparation Processes</h2>
                    <div className="process-content1">
                    <div className="process-image1">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGh_k93SKDUu6YukWdPTJw1LS3P0WUIILOAQ&s" alt="Farm-to-table truck" className="fm"/>
                        </div>
                        <div className="process-text1">
                            <p>
                            The preparation process for farm-to-table dishes begins with sourcing and handling the freshest ingredients. Produce is hand-picked from local farms or suppliers to ensure peak ripeness and quality, then carefully washed and sorted to remove impurities. Vegetables are peeled, chopped, or prepped as needed, while plant-based proteins like tofu or legumes are marinated or seasoned. Essential components such as stocks, sauces, and dressings are made in-house using whole ingredients to guarantee bold, natural flavors.
                            </p>
                            
                            <p>
                            To streamline service, staples like grains, soups, or roasted vegetables are batch-cooked in advance, while mains and appetizers are prepared fresh to order. Chefs meticulously assemble dishes, focusing on consistency and presentation. Each plate is finished with thoughtful garnishes to balance flavor and elevate its visual appeal. Before leaving the kitchen, dishes undergo a quality check to meet high standards of taste and appearance.    
                            </p>
                        </div>
                    </div>
                </section>

                <section className="process-section">
                    <h2>Our Approach to Sustainability</h2>
                    <div className="process-content">
                        <div className="process-text">
                            <p>
                            Sustainability is a core principle of Vegan Villa. From sourcing ingredients to serving dishes, we prioritize eco-friendly practices. Local sourcing reduces transportation emissions, while seasonal ingredients minimize the energy footprint of farming. In the kitchen, chefs utilize every part of an ingredient, ensuring minimal food waste. Additionally, scraps are composted.
                            </p>
                            
                            <p>
                            The restaurant emphasizes reusable or biodegradable materials for packaging and storage, eliminating single-use plastics. Energy-efficient appliances and waste recycling further reduce the environmental impact. Guests are encouraged to embrace sustainability by offering incentives for bringing their own containers or participating in community composting programs.
                            </p>
                        </div>
                        <div className="process-image pie">
                            <img src="https://i.ibb.co/d6MSHnw/i-Stock-694076680-e1519393024909-scaled.jpg" alt="Farm-to-table truck" className="pi"/>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
}
