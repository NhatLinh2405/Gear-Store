import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";

import Cart from "./Cart";
import { useStateContext } from "../context/StateContext";

export default function Navbar() {
    const { showCart, setShowCart, totalQuantities } = useStateContext();

    const showLinks = () => {
        var topNav = document.getElementById("topNav");
        if (topNav.className === "header-right") {
            topNav.className += " responsive";
        } else {
            topNav.className = "header-right";
        }
    };

    return (
        <div className="navbar">
            <div className="navbar-container">
                <div className="header-right" id="topNav">
                    <Link href="/" onClick={showLinks}>
                        Shadow Gear
                    </Link>
                    <Link href="/cards">Cards</Link>
                    <Link href="/posters">Posters</Link>
                    <Link href="/mount">Mount</Link>
                </div>
                {/* <button type="button" className="icon" onClick={() => showLinks()}>
                <GiHamburgerMenu />
            </button> */}
                <button
                    type="button"
                    className="cart-icon"
                    onClick={() => setShowCart(true)}
                >
                    <AiOutlineShopping />
                    <span className="cart-item-qty">{totalQuantities}</span>
                </button>
                {showCart && <Cart />}
            </div>
        </div>
    );
}
