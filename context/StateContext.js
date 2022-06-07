import React from "react";
import { useState, useContext, createContext, useEffect } from "react";
import { toast } from "react-hot-toast";

const Context = createContext();

export const StateContext = ({ children }) => {
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState();
    const [totalQuantities, setTotalQuantities] = useState();
    const [qty, setQty] = useState(1);

    const addToCart = (product, quantity) => {
        const checkProductInCart = cartItems.find(
            (item) => item._id === product._id
        );

        setTotalPrice(
            (prevTotalPrice) => prevTotalPrice + product.price * quantity
        );

        setTotalQuantities(
            (prevTotalQuantities) => prevTotalQuantities + quantity
        );

        if (checkProductInCart) {
            const updateCartItem = cartItems.map((cartProduct) => {
                if (cartProduct._id === product._id)
                    return {
                        ...cartProduct,
                        quantity: cartProduct.quantity + quantity,
                    };
                return cartProduct;
            });
            setCartItems(updateCartItem);
        } else {
            product.quantity = quantity;
            setCartItems([...cartItems, { ...product }]);
        }
        toast.success(`${qty} ${product.name} added to cart`);
        // toast.error(`${qty} ${product.name} added to cart`);
    };

    const incQty = () => {
        setQty((prev) => prev + 1);
    };

    const decQty = () => {
        setQty((prev) => (prev > 1 ? prev - 1 : (prev = 1)));
    };

    const value = {
        showCart,
        setShowCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        incQty,
        decQty,
        addToCart,
    };

    return <Context.Provider value={value}>{children}</Context.Provider>;
};
export const useStateContext = () => useContext(Context);
