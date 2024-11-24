import './App.css';
import { useState } from "react";

import { Nav } from './Navbar';

export function Menu(props) {
    const [hoveredItem, setHoveredItem] = useState(null);

    const menuData = {
        Appetizers: [
            { name: "Buffalo Cauliflower Wings", description: "Crispy, golden cauliflower bites tossed in a spicy buffalo sauce, delivering the perfect balance of heat and flavor. Served alongside a creamy, cooling vegan ranch, these wings are a perfect way to start any meal." ,
                picture:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSsS0832EoN74EkTYNYPFS--WQbye1g-NWc8EqQbhRTscAOAgFm"},
            { name: "Spinach & Artichoke Dip", description: "This creamy, dairy-free spinach and artichoke dip is rich and velvety, made with cashews and nutritional yeast for that cheesy flavor. Served warm with crispy toasted baguette slices, it's perfect for dipping and sharing.",
                picture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuAKXhB8KqGiFAucZ_VSooiBLZJNsfZWiRGOywBG91y-df6GPB"
            },
            { name: "Zucchini Fritters", description: "Crispy on the outside and tender inside, these zucchini fritters are seasoned with herbs and served with a refreshing lemon-dill yogurt dip.",
                picture:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRaADP1mDid_dxbAoYq6Np115uWsSOOXSxsHlemMfhiUyAOQhro"
            },
            { name: "Stuffed Mushrooms", description: "These tender mushrooms are filled with a herbed cashew cream, then baked to golden perfection. The rich filling combines cashews, garlic, and fresh herbs for a savory bite.",
                picture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvZFwhnt-nyEIe050YcFJ3wBHshu1FCGs4PcJywp7mKjN1WoEt"
            }
        ],
        Mains: [
            { name: "Eggplant Parmesan Stack", description: "This plant-based take on the classic dish layers crispy, breaded eggplant slices with marinara sauce, cashew mozzarella, and fresh basil. It’s baked until bubbly and golden." },
            { name: "Chickpea & Spinach Curry", description: "A vibrant, creamy coconut-based curry filled with tender chickpeas and fresh spinach, served with fluffy jasmine rice." },
            { name: "Tempeh Teriyaki Bowl", description: "Marinated tempeh is stir-fried with a colorful array of vegetables, creating a savory and slightly sweet dish." },
            { name: "Loaded Veggie Burger", description: "A house-made lentil patty stacked high with lettuce, tomato, caramelized onions, and chipotle mayo in a brioche bun." },
            { name: "Vegan Lasagna", description: "Layered pasta, tofu ricotta, roasted veggies, and rich marinara sauce baked to perfection." }
        ],
        Salads: [
            { name: "Mediterranean Quinoa Salad", description: "Quinoa with cherry tomatoes, cucumbers, olives, and lemon-tahini dressing for a refreshing Mediterranean flavor." },
            { name: "Roasted Veggie Salad", description: "Seasonal roasted vegetables on a bed of greens with pumpkin seeds and balsamic vinaigrette." },
            { name: "Avocado & Citrus Salad", description: "Creamy avocado paired with juicy orange slices and crisp red onion, tossed with arugula and lime vinaigrette." }
        ],
        Desserts: [
            { name: "Vegan Cheesecake", description: "Cashew-based cheesecake with a graham cracker crust and seasonal fruit topping." },
            { name: "Chocolate Lava Cake", description: "Warm, gooey-centered chocolate cake served with coconut ice cream." },
            { name: "Banana Nice Cream Sundae", description: "Banana-based soft serve layered with chocolate sauce, granola, and fresh berries." },
            { name: "Apple Cinnamon Crumble", description: "Cinnamon-spiced apples baked with a crunchy oat topping, served with vegan vanilla custard." },
            { name: "Peanut Butter Brownies", description: "Fudgy brownies swirled with creamy peanut butter and topped with sea salt." }
        ],
        Drinks: [
            { name: "Berry Bliss Smoothie", description: "Blend of strawberries, blueberries, banana, and almond milk, naturally sweetened." },
            { name: "Golden Turmeric Latte", description: "Spiced latte with turmeric, ginger, and steamed oat milk." },
            { name: "Iced Hibiscus Tea", description: "Tangy hibiscus tea served over ice with mint and lime." },
            { name: "Matcha Lemonade", description: "Ceremonial-grade matcha with zesty fresh lemonade." },
            { name: "Coconut Espresso Shake", description: "Espresso with coconut milk and vanilla, blended with ice." }
        ]
    };

    const renderMenuSection = (section, items) => (
        <div className="menu-section" key={section}>
            <h2>{section}</h2>
            <div className="menu-items">
                {items.map((item, index) => {
                    return <div
                        key={index}
                        className={`menu-item ti${Math.round(Math.pow(-1,index)/2 + 1/2)}`}
                        onMouseEnter={() => setHoveredItem(item.name)}
                        onMouseLeave={() => setHoveredItem(null)} > {/*style={{transform:`rotate(${Math.pow(-1,index)*2.5}deg)`}}*/}
                            {/* {(item.name == "Buffalo Cauliflower Wings") ? <img src={item.picture} alt="" className="menu-picture"/> : "")} */}
                            {section == "Appetizers" ? (<img src={item.picture} alt="" className="menu-picture"/>) : ""}
                        <p className="menu-name">{item.name}</p>
                        {hoveredItem === item.name && (
                            <p className="menu-description">{item.description}</p>
                        )}
                    </div>
                })}
            </div>
        </div>
    );

    return (
        <div>
            <Nav/>
            <title>Menu | Vegan Villa</title>
        <div className="menu-container">
            <h1>Menu</h1>
            {Object.entries(menuData).map(([section, items]) => renderMenuSection(section, items))}
        </div>
        </div>
    );
}