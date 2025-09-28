

import React from "react";
import ReactDOM from "react-dom/client";



// Header
const Header = () =>{
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=food&sf=&txt_keyword=All"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const styleCard = {
    backgroundColor : "#f0f0f0"
}


// RestaurantCard

const RestaurantCard = (props) => {
    return (
        <div className="res-card" style={styleCard}>
            <img className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/gp1ityra6utvzqn6ghnv" />
            <h3>{props.resName}</h3>
            <h4>{props.cuisine}</h4>
            <h4>4.3 Starts</h4>
            <h5>38 minutes</h5>
        </div>
    )
}


// Body
const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {/* restaurant card */}
                <RestaurantCard resName="Meghna Foods" cuisine="Biriyani, North Indian, Asian"/>
                <RestaurantCard resName="KFC" cuisine="Fast Food"/>
            </div>
        </div>
    )
}


const AppLayout = () =>{
    return(
        <div>
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout />)