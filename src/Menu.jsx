import './App.css';
import { useState } from "react";

import { Nav } from './Navbar';
import { Footer } from './components/footer'

export function Menu(props) {
    const [hoveredItem, setHoveredItem] = useState(null);

    const menuData = {
        Appetizers: [
            { name: "Buffalo Cauliflower Wings", description: "Crispy, golden cauliflower bites tossed in a spicy buffalo sauce, delivering the perfect balance of heat and flavor. Served alongside a creamy, cooling vegan ranch, these wings are a perfect way to start any meal." ,
                picture:"https://i.ibb.co/K5Vkmf7/buffy.jpg"},
            { name: "Spinach & Artichoke Dip", description: "This creamy, dairy-free spinach and artichoke dip is rich and velvety, made with cashews and nutritional yeast for that cheesy flavor. Served warm with crispy toasted baguette slices, it's perfect for dipping and sharing.",
                picture:"https://i.ibb.co/cbFr8Y9/images.jpg"
            },
            { name: "Zucchini Fritters", description: "Crispy on the outside and tender inside, these zucchini fritters are seasoned with herbs and served with a refreshing lemon-dill yogurt dip.",
                picture:"https://www.twopeasandtheirpod.com/wp-content/uploads/2022/08/Zucchini-Fritters-4.jpg"
            },
            { name: "Stuffed Mushrooms", description: "These tender mushrooms are filled with a herbed cashew cream, then baked to golden perfection. The rich filling combines cashews, garlic, and fresh herbs for a savory bite.",
                picture:"https://i.ibb.co/235JfZM/images.jpg"
            }
        ],
        Mains: [
            { name: "Eggplant Parmesan Stack", description: "This plant-based take on the classic dish layers crispy, breaded eggplant slices with marinara sauce, cashew mozzarella, and fresh basil. It’s baked until bubbly and golden, offering a comforting, hearty dish. Paired with a simple side salad, it's a meal that feels indulgent yet wholesome.",
                picture:"https://i.ibb.co/QM69tKn/i.jpg"},
            { name: "Chickpea & Spinach Curry", description: "A vibrant, creamy coconut-based curry filled with tender chickpeas and fresh spinach, this dish is fragrant with aromatic spices. Served with fluffy jasmine rice, it’s a satisfying and flavorful meal that hits all the right notes. It's the perfect comfort food for those craving rich flavors with a lighter twist.",
                picture: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTrZs2hO0Y82BOv5EF-_ZRksLaD7Lp1RAgFi6I0SiFKNAvYIgz-"},
            { name: "Tempeh Teriyaki Bowl", description: "Marinated tempeh is stir-fried with a colorful array of vegetables, creating a dish that’s both savory and slightly sweet. Topped with sesame seeds and served over brown rice, this bowl is a filling, protein-packed meal. It’s the perfect balance of flavors and textures, making it a crowd-pleaser for all.",
                picture: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTnBVEdlN4hZxFx6Qb0Qn3BEoIOzJQPaT6T8avjXK8OjUKcr9Av"},
            { name: "Loaded Veggie Burger", description: "A house-made lentil patty is stacked high with fresh lettuce, tomato, caramelized onions, and chipotle mayo, all nestled in a soft brioche bun. The patty is hearty and flavorful, satisfying even the most avid burger lovers. With its bold toppings and juicy patty, this burger is a classic favorite made plant-based.",
                picture: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR-ctN1vr4dXzshsu4AlqxEawkiDmtWN_Y8-SjnScspw-J3yOJe"},
            { name: "Vegan Lasagna", description: "This layered masterpiece features pasta, tofu ricotta, roasted veggies, and a rich marinara sauce, all baked to perfection. It’s comforting and hearty, with a perfect balance of flavors in every bite. Whether you’re vegan or not, this lasagna offers all the savory satisfaction of the traditional dish.",
                picture: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSBNnJ0kq6e6ldRY08PNbiHHyHrh9BG_sRCbkPyMaIxjZ5wW39Y"}
        ],
        Salads: [
            { name: "Mediterranean Quinoa Salad", description: "This salad combines protein-rich quinoa with fresh cherry tomatoes, cucumbers, Kalamata olives, and a lemon-tahini dressing. It’s light, refreshing, and packed with Mediterranean flavors that make it the perfect side or light main dish. The tangy dressing brings everything together, offering a burst of brightness in every bite.",
                picture: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRrnxDUFmD1dH-GqFUOAumEii2fziscxrgpP5Jd6KK1U6NWkWTf"
            },
            { name: "Roasted Veggie Salad", description: "A medley of seasonal vegetables is roasted until tender and caramelized, then served over a bed of mixed greens. Topped with pumpkin seeds and drizzled with balsamic vinaigrette, this salad is earthy and satisfying. It’s the perfect mix of warm and cool elements, making it ideal for any season.",
                picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVPLkczG_sPRjo9g-1oUXhMQISoM22DOiwVdONge4Wy3KgT6xr"
            },
            { name: "Avocado & Citrus Salad", description: "This vibrant salad features creamy avocado paired with juicy orange slices and crisp red onion, all tossed with fresh arugula. A zesty lime vinaigrette ties the ingredients together, making it a refreshing and light dish. It’s a perfect balance of creamy, tangy, and slightly sweet.",
                picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvJQGPU3eKvhx2YyzMXkMIAzn70lJWybbHa51BAHwDJR7V3DbB"
            }
        ],
        Desserts: [
            { name: "Vegan Cheesecake", description: "Made with a creamy cashew-based filling, this vegan cheesecake is rich and smooth with a light, refreshing tang. The graham cracker crust adds a satisfying crunch, while seasonal fruit toppings provide a burst of color and natural sweetness. It’s a decadent yet wholesome way to end your meal.",
                picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7pGzRM70DK1T_kG_SO_KMQs9iyVczurpL0OH0l_nyX1WUs5mv"
            },
            { name: "Chocolate Lava Cake", description: "This warm, gooey-centered chocolate cake is rich and indulgent, with the perfect melt-in-your-mouth experience. Served with a scoop of coconut ice cream, it’s a true treat for chocolate lovers. The molten center adds a touch of drama, making it a perfect dessert for any special occasion.",
                picture: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTliRL2fB4gcM2YWhKY2ktL5YePm_BOchdhy2ccu12_oFywc_YX"
            },
            { name: "Banana Nice Cream Sundae", description: "Layers of creamy banana-based soft serve are topped with a drizzle of chocolate sauce, crunchy granola, and fresh berries. It’s a healthier twist on the classic sundae, but with all the indulgence and fun. Naturally sweetened and dairy-free, it’s a guilt-free way to satisfy your sweet tooth.",
                picture: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcThxYJRCtNmUnjRD3iwmpnxpVyBQBSYhDS31MkX9JRWd6EdOGrm"
            },
            { name: "Apple Cinnamon Crumble", description: "Warm, cinnamon-spiced apples are baked with a crunchy oat topping for a comforting dessert. Served with a side of smooth vegan vanilla custard, it’s the perfect balance of warm and creamy. This dessert is like a hug in a bowl, perfect for any time of year.",
                picture: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRUw-e0rYxCuER-SvPyJqrM9yaW21_rHySlcDeI1h3cOUv33deZ"
            },
            { name: "Peanut Butter Brownies", description: "Fudgy, rich brownies are swirled with creamy peanut butter and topped with a sprinkle of sea salt for the perfect salty-sweet bite. Each bite is dense, indulgent, and packed with flavor. These brownies are a favorite for anyone craving a chocolatey dessert with a bit of extra depth.",
                picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH2UoOfjtM98mfUHYpFRjgaVfaDgkPoUcxyeraV1N3H4PIGXKB"
            }
        ],
        Drinks: [
            { name: "Berry Bliss Smoothie", description: "A refreshing blend of sweet strawberries, tart blueberries, creamy banana, and almond milk. Lightly sweetened with maple syrup, this smoothie is a fruity burst of energy that feels like sunshine in a glass. Perfect for breakfast, lunch, or a mid-day treat, it’s packed with antioxidants and natural goodness.",
                picture: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSVKmH6ZsDpHw4PdvgsrnetN4G1iC4_aiB58espOxcepbOGNJy4"
            },
            { name: "Golden Turmeric Latte", description: "This comforting latte combines turmeric, ginger, cinnamon, and steamed oat milk for a warm, spiced drink with a golden glow. Sweetened lightly with agave, it’s a soothing choice that’s as nourishing as it is flavorful. Known for its anti-inflammatory benefits, it’s a hug in a mug that leaves you feeling balanced.",
                picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6_EO7L0S0RQPaYv1jsBoRAhBY76xBagPAHtsu8p96EDTCwCDh"
            },
            { name: "Iced Hibiscus Tea", description: "Brewed from dried hibiscus petals, this tangy, ruby-red tea is served over ice with a sprig of mint and a wedge of lime. Slightly sweet and incredibly refreshing, it’s perfect for cooling off on a warm day. Its natural tartness pairs beautifully with a hint of sweetness, creating a vibrant, invigorating drink.",
                picture: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ-fqmZ5o4el_k2pznz0lCeFoe55cEcH5GseR5uQES4oFr1zLeD"
            },
            { name: "Matcha Lemonade", description: "A bold mix of earthy ceremonial-grade matcha and zesty fresh lemonade creates this unique, energizing drink. Served chilled, it offers a harmonious balance of tart citrus and smooth green tea. The natural caffeine boost makes it a refreshing pick-me-up for any time of day.",
                picture: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRdEW0wzHfybtl1H7BKiuSsr7HpfQGSWIwnhvoz2vaJDV2Dmqwd"
            },
            { name: "Coconut Espresso Shake", description: "Rich espresso meets creamy coconut milk and a hint of vanilla, blended with ice for a frothy, indulgent treat. The bold coffee flavor is perfectly tempered by the tropical sweetness of coconut, creating a dairy-free shake that’s light yet satisfying. Ideal as a dessert drink or a luxurious energy boost.",
                picture: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTJont6ZPD8qE_ZtOhpEMKd0TUoZw7kr7opzDMfHBX1WJngOLOx"
            }
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
                            <img src={item.picture} alt="" className="menu-picture"/>
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
            <h1 className="menutitlee">Menu</h1>
            {/* Cards Section */}
          <section className="about-me-cards-section">
            <h2>Specials</h2>
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
            {Object.entries(menuData).map(([section, items]) => renderMenuSection(section, items))}
        </div>
        <Footer/>
        </div>
    );
}