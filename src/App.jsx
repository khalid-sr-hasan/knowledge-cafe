import React, { useState } from "react";
import Header from "./components/Header/Header";
import Blog from "./components/Blog/Blog";
import BookMark from "./components/BookMark/BookMark";

const App = () => {
    const [cart, setCart] = useState([]);
    const [readingTime, setReadingTime] = useState(0);
    const handleCart = (selectCart) => {
        setCart([...cart, selectCart]);
    };
    const handleReading = (id, markRead) => {
        const newRedingTime = readingTime + markRead;
        setReadingTime(newRedingTime);
        const remainingCart = cart.filter((item) => item.id !== id);
        setCart(remainingCart);
    };
    return (
        <>
            <Header />
            <div className="container m-auto mt-8">
                <div className=" px-2 gap-5 md:flex md:justify-between">
                    <Blog
                        handleCart={handleCart}
                        handleReading={handleReading}
                    />
                    <BookMark cart={cart} readingTime={readingTime} />
                </div>
            </div>
        </>
    );
};

export default App;
