import './App.css';
import { useState } from "react";

import { Nav } from './Navbar';
import { Footer } from './components/footer'
import { MenuCard } from './components/menuCard'

export function Menu(props) {
    const [hoveredItem, setHoveredItem] = useState(null);

    /*
    const menuData = {
        Appetizers: [
            { name: "Spicy Vegan Sausage Rolls", description: "Try our Spicy Vegan Sausage Rolls, made with a flavorful plant-based sausage filling and wrapped in flaky puff pastry. The filling is spiced with smoky paprika and chili, giving it a nice kick. A simple and satisfying snack or meal option." ,
                picture:"https://media-cdn2.greatbritishchefs.com/media/5kbpxf0s/img32930.whqc_1536x1024q80.webp"},
            { name: "Vegan Baked Beans", description: "Enjoy our Vegan Baked Beans, slow-cooked in a rich tomato sauce with a hint of smokiness and spice. The tender beans are packed with flavor, making it a hearty and satisfying dish. Perfect on toast or as a side.",
                picture:"https://media-cdn2.greatbritishchefs.com/media/cr4fqdm1/img38195.whqc_1536x1024q80.webp"
            },
            { name: "Chestnut-filled Cabbage Leaves", description: "Try our Chestnut-Filled Cabbage Leaves, with tender cabbage wrapped around a savory chestnut filling. Baked until perfectly tender and served with a light tomato sauce, this dish is hearty and flavorful. A simple, wholesome option for any occasion.",
                picture:"https://media-cdn2.greatbritishchefs.com/media/vx0f1gy5/img80065.whqc_1536x1024q80.webp"
            },
            { name: "Momos", description: "Enjoy our Momos, steamed dumplings filled with a savory mix of vegetables and spices. Served with a tangy dipping sauce, they’re a simple and satisfying snack or meal.",
                picture:"https://media-cdn2.greatbritishchefs.com/media/izfhqkhf/romy_recipe-3770-copy.whqc_1536x1024q80.webp"
            },
            { name: "Scrambled Tofu", description: "Try our Scrambled Tofu, a light and flavorful dish seasoned with turmeric and spices. It’s a perfect plant-based alternative to scrambled eggs, great on its own or with toast.",
              picture:"https://media-cdn2.greatbritishchefs.com/media/qbzjoev4/img31723.whqc_1536x1024q80.webp"}
        ],
        Mains: [

            { name: "Mushroom and Quinoa Vegan Burger", description: "Enjoy our Mushroom and Quinoa Vegan Burger, made with a savory patty of mushrooms and quinoa. Served in a soft bun with fresh toppings, it’s hearty and delicious. A simple and satisfying plant-based choice.",
                picture: "https://media-cdn2.greatbritishchefs.com/media/22sfe0ld/img54263.whqc_1536x1024q80.webp"},
            { name: "Barbecued Celeriac Burger", description: "Try our Barbecued Celeriac Burger, featuring smoky, grilled celeriac in a soft bun. Topped with fresh slaw and a touch of barbecue sauce, it’s simple and satisfying. A unique plant-based option that’s full of flavor.",
                picture: "https://media-cdn2.greatbritishchefs.com/media/bw1klhsb/img82261.whqc_1536x1024q80.webp"},
            { name: "Quorn Rendang Curry", description: "Enjoy our Quorn Rendang Curry, a flavorful dish with Quorn pieces simmered in a rich, spiced coconut sauce. It’s hearty, warming, and pairs perfectly with rice. A simple take on a classic, full of bold flavors.",
                picture: "https://media-cdn2.greatbritishchefs.com/media/ai0bsxio/img41438.whqc_1536x1024q80.webp"},
            { name: "Quorn and Sweet Potato Curry", description: "Try our Quorn and Sweet Potato Curry, a comforting dish with tender Quorn pieces and sweet potato in a lightly spiced sauce. It’s warm and perfect with rice or bread. A simple and satisfying plant-based meal.",
                picture: "https://media-cdn2.greatbritishchefs.com/media/v5ofa4yp/img37764.whqc_768x512q80.webp"},
            { name: "Mujadara", description: "Enjoy our Mujadara, a simple dish of lentils and rice topped with crispy caramelized onions. It’s hearty, flavorful, and made with just a few basic ingredients. A timeless and satisfying meal for any time of day.",
                picture:"https://media-cdn2.greatbritishchefs.com/media/gueitkae/mujadara.whqc_1536x1024q80.webp"}
        ],
        Salads: [
            { name: "Spiced Roasted Cauliflower and Orange Salad", description: "Try our Spiced Roasted Cauliflower and Orange Salad, featuring roasted cauliflower with a touch of spice and sweet orange segments. The simple combination of flavors is light, refreshing, and satisfying. A perfect side or light meal option.",
                picture: "https://media-cdn2.greatbritishchefs.com/media/tmahtlor/img81346.whqc_1536x1024q80.webp"
            },
            { name: "Beetroot Salad", description: "Try our Beetroot Salad, a simple yet flavorful mix of roasted beetroot, fresh greens, and a tangy dressing. The earthy sweetness of the beets is perfectly complemented by the crispness of the salad. Light, refreshing, and full of natural goodness.",
                picture: "https://media-cdn2.greatbritishchefs.com/media/oujh3oi3/img78057.whqc_1536x1024q80.webp"
            },
            { name: "Autumn Vegetable Salad", description: "Enjoy our Autumn Vegetable Salad, featuring roasted seasonal vegetables like squash, carrots, and parsnips, tossed with fresh greens. Drizzled with a maple-balsamic dressing, it’s a perfect balance of sweet, savory, and earthy flavors. A warming and nutritious dish, ideal for the cooler months.",
                picture: "https://media-cdn2.greatbritishchefs.com/media/sipbwszl/img78113.whqc_1536x1024q80.webp"
            }
        ],
        Desserts: [
            { name: "Gluten-Free Banana Bread", description: "Savor our Gluten-Free Banana Bread, made with ripe bananas and almond flour for a moist, naturally sweet treat. It’s soft, light, and free from gluten, making it the perfect snack or breakfast option. Simple, wholesome, and utterly delicious.",
                picture: "https://media-cdn2.greatbritishchefs.com/media/sgdnmh0n/img54238.whqc_1536x1024q80.webp"
            },
            { name: "Frosted Raw Vegan Brownies", description: "Enjoy our Frosted Raw Vegan Brownies, made with 75% cacao, dates, and walnuts for a naturally sweet and fudgy base. Topped with a smooth raw chocolate frosting, these brownies are a delicious and guilt-free treat. Perfect for a sweet craving that’s both indulgent and wholesome.",
                picture: "https://media-cdn2.greatbritishchefs.com/media/1xsnqmkp/img71014.whqc_1536x1024q80.webp"
            },
            { name: "Vegan Chestnut and Orange Cheesecake", description: "Try our Vegan Chestnut and Orange Cheesecake, a creamy dessert with a blend of chestnut and orange flavors. The smooth filling sits on a nutty base, offering a satisfying and refreshing taste. A delicious, plant-based treat for any occasion.",
                picture: "https://media-cdn2.greatbritishchefs.com/media/zltnekci/cheesecake-recipe.whqc_1536x1024q80.webp"
            },
            { name: "Vegan Banana and Chocolate Nice Cream", description: "Cool off with our Vegan Banana and Chocolate Nice Cream, a creamy, dairy-free treat made with ripe bananas and rich cocoa. Naturally sweet and refreshing, it’s a simple, plant-based dessert that’s both healthy and delicious. Perfect for a guilt-free treat on a warm day.",
                picture: "https://media-cdn2.greatbritishchefs.com/media/utupgnva/img66564.whqc_1536x1024q80.webp"
            },
            { name: "Vegan Dark Chocolate Mousse", description: "Enjoy our Vegan Dark Chocolate Mousse, a rich and creamy dessert made with dark chocolate and coconut milk. It’s smooth, decadent, and naturally dairy-free, offering a simple yet satisfying treat. Perfect for chocolate lovers looking for a plant-based indulgence.",
                picture: "https://media-cdn2.greatbritishchefs.com/media/povf20rd/img74937.whqc_1536x1024q80.webp"
            }
        ],
        Drinks: [
            { name: "Watermelon, Rosemary, and Prosecco Sorbet Cocktail", description: "Try our Watermelon, Rosemary, and Prosecco Sorbet Cocktail, a light and refreshing drink. With the natural sweetness of watermelon, a hint of rosemary, and a splash of Prosecco, it’s a simple and enjoyable treat. Perfect for a relaxing moment or a casual gathering.",
                picture: "https://media-cdn2.greatbritishchefs.com/media/3ajekhpj/img40353.whqc_1536x1024q80.webp"
            },
            { name: "Acai Berry Smoothie", description: "Enjoy our Acai Berry Smoothie, a refreshing blend of acai berries, banana, and coconut water. Naturally sweet and packed with antioxidants, it’s the perfect way to start your day or recharge in the afternoon. Simple, delicious, and full of nutrients.",
                picture: "https://media-cdn2.greatbritishchefs.com/media/adejvmsb/img60971.whqc_1536x1024q80fpt502fpl494.webp"
            },
            { name: "Mulled Wine Hot Chocolate", description: "Warm up with our Mulled Wine Hot Chocolate, a cozy blend of rich hot chocolate and mulled wine spices. With hints of cinnamon and cloves, it’s a comforting drink perfect for chilly evenings. A simple yet indulgent way to enjoy the best of both worlds.",
                picture: "https://media-cdn2.greatbritishchefs.com/media/idghe1n3/img85166.whqc_1536x1024q80.webp"
            }
        ]
    };
    */

    const menuData = {
      Appetizers: [
          { name: "Spicy Vegan Sausage Rolls", description: "Try our Spicy Vegan Sausage Rolls, made with a flavorful plant-based sausage filling and wrapped in flaky puff pastry. The filling is spiced with smoky paprika and chili, giving it a nice kick. A simple and satisfying snack or meal option." ,
              picture:"https://images.unsplash.com/photo-1673960782730-ab13fc062d6d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
          { name: "Vegan Baked Beans", description: "Enjoy our Vegan Baked Beans, slow-cooked in a rich tomato sauce with a hint of smokiness and spice. The tender beans are packed with flavor, making it a hearty and satisfying dish. Perfect on toast or as a side.",
              picture:"https://plus.unsplash.com/premium_photo-1669655027896-ff0a54f7080d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          { name: "Chestnut-filled Cabbage Leaves", description: "Try our Chestnut-Filled Cabbage Leaves, with tender cabbage wrapped around a savory chestnut filling. Baked until perfectly tender and served with a light tomato sauce, this dish is hearty and flavorful. A simple, wholesome option for any occasion.",
              picture:"https://plus.unsplash.com/premium_photo-1702489575751-6571ba63d74f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          { name: "Momos", description: "Enjoy our Momos, steamed dumplings filled with a savory mix of vegetables and spices. Served with a tangy dipping sauce, they’re a simple and satisfying snack or meal.",
              picture:"https://images.unsplash.com/photo-1664990035720-faac522df41f?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          { name: "Scrambled Tofu", description: "Try our Scrambled Tofu, a light and flavorful dish seasoned with turmeric and spices. It’s a perfect plant-based alternative to scrambled eggs, great on its own or with toast.",
            picture:"https://plus.unsplash.com/premium_photo-1712758762195-c236223ce941?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
      ],
      Mains: [

          { name: "Mushroom and Quinoa Vegan Burger", description: "Enjoy our Mushroom and Quinoa Vegan Burger, made with a savory patty of mushrooms and quinoa. Served in a soft bun with fresh toppings, it’s hearty and delicious. A simple and satisfying plant-based choice.",
              picture: "https://images.unsplash.com/photo-1521305916504-4a1121188589?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
          { name: "Barbecued Celeriac Burger", description: "Try our Barbecued Celeriac Burger, featuring smoky, grilled celeriac in a soft bun. Topped with fresh slaw and a touch of barbecue sauce, it’s simple and satisfying. A unique plant-based option that’s full of flavor.",
              picture: "https://images.unsplash.com/photo-1646346158767-3a323cc15281?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
          { name: "Vegan Rendang Curry", description: "Enjoy our Vegan Rendang Curry, a flavorful dish with vegan chicken simmered in a rich, spiced coconut sauce. It’s hearty, warming, and pairs perfectly with rice. A simple take on a classic, full of bold flavors.",
              picture: "https://images.unsplash.com/photo-1606143704849-eb181ba1543a?q=80&w=1430&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
          { name: "Vegan Chicken and Sweet Potato Curry", description: "Try our Vegan Chicken and Sweet Potato Curry, a comforting dish with tender vegan chicken pieces and sweet potato in a lightly spiced sauce. It’s warm and perfect with rice or bread. A simple and satisfying plant-based meal.",
              picture: "https://plus.unsplash.com/premium_photo-1670191894637-d91be8515948?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
          { name: "Mujadara", description: "Enjoy our Mujadara, a simple dish of lentils and rice topped with crispy caramelized onions. It’s hearty, flavorful, and made with just a few basic ingredients. A timeless and satisfying meal for any time of day.",
              picture:"https://thumbs.dreamstime.com/z/vegetarian-meal-mujaddara-rice-lentils-fried-onions-cl-vegetarian-meal-mujaddara-rice-lentils-fried-onions-close-108087628.jpg?ct=jpeg"}
      ],
      Salads: [
          { name: "Spiced Roasted Cauliflower and Orange Salad", description: "Try our Spiced Roasted Cauliflower and Orange Salad, featuring roasted cauliflower with a touch of spice and sweet orange segments. The simple combination of flavors is light, refreshing, and satisfying. A perfect side or light meal option.",
              picture: "https://images.unsplash.com/photo-1588930850267-fe671c9ed91f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          { name: "Beetroot Salad", description: "Try our Beetroot Salad, a simple yet flavorful mix of roasted beetroot, fresh greens, and a tangy dressing. The earthy sweetness of the beets is perfectly complemented by the crispness of the salad. Light, refreshing, and full of natural goodness.",
              picture: "https://images.unsplash.com/photo-1609368654426-f01c5cbc0fe6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          { name: "Autumn Vegetable Salad", description: "Enjoy our Autumn Vegetable Salad, featuring roasted seasonal vegetables like squash, carrots, and parsnips, tossed with fresh greens. Drizzled with a maple-balsamic dressing, it’s a perfect balance of sweet, savory, and earthy flavors. A warming and nutritious dish, ideal for the cooler months.",
              picture: "https://plus.unsplash.com/premium_photo-1699881081701-1a493d448f21?q=80&w=1500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
      ],
      Desserts: [
          { name: "Gluten-Free Banana Bread", description: "Savor our Gluten-Free Banana Bread, made with ripe bananas and almond flour for a moist, naturally sweet treat. It’s soft, light, and free from gluten, making it the perfect snack or breakfast option. Simple, wholesome, and utterly delicious.",
              picture: "https://images.unsplash.com/photo-1606101205680-30d1fe1f3fb1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          { name: "Frosted Raw Vegan Brownies", description: "Enjoy our Frosted Raw Vegan Brownies, made with 75% cacao, dates, and walnuts for a naturally sweet and fudgy base. Topped with a smooth raw chocolate frosting, these brownies are a delicious and guilt-free treat. Perfect for a sweet craving that’s both indulgent and wholesome.",
              picture: "https://plus.unsplash.com/premium_photo-1663840175543-6eb0f4a25401?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          { name: "Vegan Chestnut and Orange Cheesecake", description: "Try our Vegan Chestnut and Orange Cheesecake, a creamy dessert with a blend of chestnut and orange flavors. The smooth filling sits on a nutty base, offering a satisfying and refreshing taste. A delicious, plant-based treat for any occasion.",
              picture: "https://plus.unsplash.com/premium_photo-1722686461601-b2a018a4213b?q=80&w=1555&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          { name: "Vegan Banana and Chocolate Nice Cream", description: "Cool off with our Vegan Banana and Chocolate Nice Cream, a creamy, dairy-free treat made with ripe bananas and rich cocoa. Naturally sweet and refreshing, it’s a simple, plant-based dessert that’s both healthy and delicious. Perfect for a guilt-free treat on a warm day.",
              picture: "https://images.unsplash.com/photo-1630301786766-70c27110f563?q=80&w=1563&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          { name: "Vegan Dark Chocolate Mousse", description: "Enjoy our Vegan Dark Chocolate Mousse, a rich and creamy dessert made with dark chocolate and coconut milk. It’s smooth, decadent, and naturally dairy-free, offering a simple yet satisfying treat. Perfect for chocolate lovers looking for a plant-based indulgence.",
              picture: "https://images.unsplash.com/photo-1603032305813-be7441bc1037?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
      ],
      Drinks: [
          { name: "Watermelon, Rosemary, and Prosecco Sorbet Cocktail", description: "Try our Watermelon, Rosemary, and Prosecco Sorbet Cocktail, a light and refreshing drink. With the natural sweetness of watermelon, a hint of rosemary, and a splash of Prosecco, it’s a simple and enjoyable treat. Perfect for a relaxing moment or a casual gathering.",
              picture: "https://images.unsplash.com/photo-1497534446932-c925b458314e?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          { name: "Acai Berry Smoothie", description: "Enjoy our Acai Berry Smoothie, a refreshing blend of acai berries, banana, and coconut water. Naturally sweet and packed with antioxidants, it’s the perfect way to start your day or recharge in the afternoon. Simple, delicious, and full of nutrients.",
              picture: "https://images.unsplash.com/photo-1494315153767-9c231f2dfe79?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

          },
          { name: "Mulled Wine Hot Chocolate", description: "Warm up with our Mulled Wine Hot Chocolate, a cozy blend of rich hot chocolate and mulled wine spices. With hints of cinnamon and cloves, it’s a comforting drink perfect for chilly evenings. A simple yet indulgent way to enjoy the best of both worlds.",
              picture: "https://images.unsplash.com/photo-1641354513051-7b277d8d12fd?q=80&w=1389&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
      ]
  };

    const renderMenuSection = (section, items) => (
      <div>
        <h2>{section}</h2>
          <div className="about-me-cards-container">
                {items.map((item, index) => {
            // return <div className="about-me-card">
            //         <div className="about-me-card-image">
            //         <img src={item.picture} alt="Menu Item" className="more"/>
            //         </div>
            //         <div className="about-me-card-content">
            //           <h3>{item.name}</h3>
            //           <p>{item.description}</p>
            //         </div>
            //       </div>
            return <MenuCard name={item.name} picture={item.picture} description={item.description}/>
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
          {/* <section className="about-me-cards-section">
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
          </section> */}
          {/* <h1>Main Menu</h1> */}
            {Object.entries(menuData).map(([section, items]) => renderMenuSection(section, items))}

            {/* <div className="about-me-cards-container">
            {Object.entries(menuData).map(([section, items]) => <div className="about-me-card">
                <div className="about-me-card-image">
                  <img src={items[0].picture} alt="Menu Item" className="more"/>
                </div>
                <div className="about-me-card-content">
                  <h3>{items[0].name}</h3>
                  <p>{items[0].description}</p>
                </div>
              </div>)}
              </div> */}
        </div>
        <Footer/>
        </div>
    );
}