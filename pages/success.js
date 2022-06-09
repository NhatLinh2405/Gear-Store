import React from "react";
import Link from "next/link";
import { runFireWorks } from "../lib/utils";

import { useEffect } from "react";
import { useStateContext } from "../context/StateContext";

import { BsBagCheckFill } from "react-icons/bs";

export default function Success() {
    const { setCartItems, setTotalPrice, setTotalQuantities } =
        useStateContext();

    useEffect(() => {
        localStorage.clear();
        setCartItems([]);
        setTotalPrice(0);
        setTotalQuantities(0);
        runFireWorks();
    }, []);
    return (
        <div className="success-wrapper">
            <div className="success">
                <p className="icon">
                    <BsBagCheckFill />
                </p>
                <h2>Thank you for order!</h2>
                <p className="email-msg">
                    Check your email inbox for the receipt.
                </p>
                <p className="description">
                    If you have any question?
                    <a href="mailto:nhatlinh240501@gmail.com" className="email">
                        nhatlinh240501@gmail.com
                    </a>
                </p>
                <Link href="/">
                    <button type="button" width="300px" className="btn">
                        Continues Shopping
                    </button>
                </Link>
            </div>
        </div>
    );
}
