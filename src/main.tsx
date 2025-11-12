import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {HashRouter, Outlet, Route, Routes} from "react-router";
import { useNavigate } from 'react-router';
import "./webby.css"
import {useState} from "react";


function Home() {
       return (
           <div className="glossy">
               <header className="gloss-header">
                   <div className="logo">
                       <img src="logo.png" alt="G'Loss Records logo" className="logo-img"/>
                       <div className="logo-text">
                           <h1>G'Loss Records</h1>
                           <p className="tag">Music you can touch • Music you can feel</p>
                       </div>
                   </div>
               </header>

               <section className="context">
                   <div className="context-text">
                       <h2>Bringing back the physical connection to music</h2>
                       <p>
                           In a world dominated by streaming, <strong>G'Loss Records</strong> restores music’s culture
                           by
                           celebrating artists and the tangible records fans can own.
                       </p>
                       <blockquote className="quote">“music isn't just something you listen to — it's
                           something you live”
                       </blockquote>
                   </div>
               </section>

               <section id="about" className="about">
                   <div className="about-text">
                       <h3>Our Mission</h3>
                       <p>
                           Our mission is to keep music alive by connecting people through music with the records they
                           love. We
                           celebrate every sound and artist through the power of physical music and compelling
                           experiences.
                       </p>
                       <p>
                           We plan on achieving this by providing the best customer support and offering both the most
                           demanded records
                           and the lesser known ones — something for everyone.
                       </p>
                   </div>
               </section>
               <section className="problem-solution">
                   <div className="probbyandsolution">
                       <h4>THE PROBLEM</h4>
                       <p>
                           Streaming dominates entertainment and music has lost physical connection. Small artists
                           rarely have their work
                           showcased in tangible form and fans cannot easily support them. Music is losing culture due
                           to streaming.
                       </p>
                   </div>
                   <div className="probbyandsolution">
                       <h4>THE SOLUTION</h4>
                       <p>
                           G'Loss products give a physical connection between the buyer and the music — an experience
                           that has been lost.
                           We revive collectible formats and create shared experiences between artists and fans.
                       </p>
                   </div>
               </section>

               <section id="spotlight" className="spotlight">
                   <h3>SPOTLIGHT</h3>
                   <div className="spotlightty">
                       <div className="spotlight-text">
                           <p className="spotlight-role">CEO</p>
                           <h4>URIEL AMARO</h4>
                           <p className="spotlight-bio">"I have no experience but I manage everything and all the
                               profits go to me — G'Loss CEO"</p>
                       </div>
                   </div>
               </section>
               <section id="products" className="products">
                   <h3>WHAT WE OFFER</h3>
                   <div className="values">
                       <div className="value">
                           <h5>01</h5>
                           <p>Physical forms of your favorite music — vinyls, cassettes, and collectible art.</p>
                       </div>
                       <div className="value">
                           <h5>02</h5>
                           <p>Huge selection at affordable prices — more variety than the average store.</p>
                       </div>
                       <div className="value">
                           <h5>03</h5>
                           <p>Market research to find what listeners want and spotlight rising artists.</p>
                       </div>
                   </div>
               </section>
           </div>
       )
}

function Products() {
    function addToCart(product) {
        let arr = [];
        const saved = localStorage.getItem("cart");
        if(saved !== null) {
            arr = JSON.parse(saved);
        }
        arr.push(product);
        localStorage.setItem("cart", JSON.stringify(arr));
    }
    return (
        <div className="glossy">
            <header className="gloss-header">
                <div className="logo">
                    <img src="logo.png" alt="G'Loss Records logo" className="logo-img"/>
                    <div className="logo-text">
                        <h1>G'Loss Records</h1>
                        <p className="tag">Products</p>
                    </div>
                </div>
            </header>

            <section className="products-header">
                <h2>Our Products</h2>
                <p>Explore the unique physical music experiences from G'Loss Records.</p>
            </section>


            <section className="product-list">
                <div className="productty">
                    <div className="product-image">
                        <img src="vinyl%201.webp" alt="Vinyl placeholder" className="product-img" />
                    </div>
                    <div className="product-info">
                        <h3>G'loss Original Kpop Demon Hunters Vinyl</h3>
                        <p>Limited-edition vinyl featuring the song "GOLDEN" from overnight sensational movie Kpop Demon Hunters *Female Characters NOT included* ONLY $34.99</p>
                        <button className="BuyButton" onClick={ () =>addToCart("Kpop Demon Hunter-GOLDEN vinyl")}>Buy Now</button>
                    </div>
                </div>



                <div className="productty">
                    <div className="product-image">
                        <img src="radio.webp" alt="Radio placeholder" className="product-img" />
                    </div>
                    <div className="product-info">
                        <h3>G'loss Special Edition Radio</h3>
                        <p>A swaggy radio to play the lastest vinyls on. Not only will you be listening to cool music, but youll also be listening on the coolest radio. ONLY FOR $99.99</p>
                        <button className="BuyButton" onClick={ () => addToCart("Lightning McQueen Swaggy Radio")}>Buy Now</button>
                    </div>
                </div>
            </section>

        </div>
    );
}

function Cart() {
    const [items, setItems] = useState(JSON.parse(localStorage.getItem("cart") as string));

    return (

        <div className="glossy">
            <header className="gloss-header">
                <div className="logo">
                    <img src="logo.png" alt="G'Loss Records logo" className="logo-img"/>
                    <div className="logo-text">
                        <h1>G'Loss Records</h1>
                        <p className="tag">Cart</p>
                    </div>
                </div>
            </header>
            <section className="cart-header">
                <h2>Your Cart</h2>
                <p>This is what you want:</p>
            </section>
            <ul>
                {items.map((item, index) =>
                    <li key={index}>{item}</li>
                )}
            </ul>

        </div>
    )
}

function NavBar() {
    const navigate = useNavigate();

    const handleGoToCart = () => {
        navigate('/cart'); // Navigates to /#/about
    };
    const handleGoToHome = () => {
        navigate('/'); // Navigates to /#/about
    };
    const handleGoToProducts = () => {
        navigate('/products'); // Navigates to /#/about
    };

    return (
        <>
            <div className="Navvy">
                <button className="NavButton" onClick={handleGoToHome}>Go to Home</button>
    <button className="NavButton" onClick={handleGoToProducts}>Go to Products</button>
    <button className="NavButton" onClick={handleGoToCart}>Go to Cart</button>

</div>
    <div id={"restOfScreen"}>

        <Outlet/>
    </div>
</>

)
    ;
}

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <HashRouter>
            <Routes>
                <Route path="/" element={<NavBar/>}>
                <Route index element={<Home/>}/>
                    <Route path="products" element={<Products/>}/>
                    <Route path="/cart" element={<Cart />} />
            </Route>
        </Routes>

    </HashRouter>
  </StrictMode>,
)
