import React from "react";
import Link from "next/link";
<<<<<<< HEAD
import { AiOutlineShopping, AiOutlineMenu } from "react-icons/ai";
=======
import { AiOutlineShopping } from "react-icons/ai";
>>>>>>> ceeeaee56993f2418a82762759eaa3d24f1b41f6

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
        <div className="navbar-container">
            <div className="header-right" id="topNav">
                <Link href="/" onClick={showLinks}>
                    Shadow Gear
                </Link>
                <Link href="/headphones">Headphone</Link>
                <Link href="/keyboard">Keyboard</Link>
                <Link href="/mouse">Mouse</Link>
                <button
                    type="button"
                    className="icon"
                    onClick={() => showLinks()}
                >
                    <AiOutlineMenu />
                </button>
                <button
                    type=""
                    className="cart-icon"
                    onClick={() => setShowCart(true)}
                >
                    <AiOutlineShopping />
                    <div className="cart-item-qty">{totalQuantities}</div>
                </button>
            </div>
            {showCart && <Cart />}
        </div>
    );
}
