import React from "react";
import { useState, useContext, createContext, useEffect } from "react";
import { toast } from "react-hot-toast";

const Context = createContext();

let foundProduct;
let index;

export const StateContext = ({ children }) => {
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantities, setTotalQuantities] = useState(0);
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

    const removeProduct = (product) => {
        foundProduct = cartItems.find((item) => item._id === product._id);
        const newCartItems = cartItems.filter(
            (item) => item._id !== product._id
        );

        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price) *
            foundProduct.quantity;
        setTotalQuantities(
            (prevTotalQuantities) => prevTotalQuantities - foundProduct.quantity
        );
        setCartItems(newCartItems);
    };

    const toggleCartItemQuantity = (id, value) => {
        foundProduct = cartItems.find((item) => item._id === id);
        index = cartItems.findIndex((product) => product._id === id);

        const newCartItems = cartItems.filter((item) => item._id !== id);

        if (value === "inc") {
            setCartItems([
                ...newCartItems,
                {
                    ...foundProduct,
                    quantity: foundProduct.quantity + 1,
                },
            ]);

            setTotalPrice(
                (prevTotalPrice) => prevTotalPrice + foundProduct.price
            );

            setTotalQuantities(
                (prevTotalQuantities) => prevTotalQuantities + 1
            );
        } else if (value === "dec") {
            if (foundProduct.quantity > 1) {
                setCartItems([
                    ...newCartItems,
                    {
                        ...foundProduct,
                        quantity: foundProduct.quantity - 1,
                    },
                ]);

                setTotalPrice(
                    (prevTotalPrice) => prevTotalPrice - foundProduct.price
                );
                setTotalQuantities(
                    (prevTotalQuantities) => prevTotalQuantities - 1
                );
            }
        }
    };

    const incQty = () => {
        setQty((prev) => prev + 1);
    };

    const decQty = () => {
        setQty((prev) => (prev > 1 ? prev - 1 : (prev = 1)));
    };

    const value = {
        setShowCart,
        setCartItems,
        setTotalPrice,
        setTotalQuantities,
        cartItems,
        showCart,
        totalPrice,
        totalQuantities,
        qty,
        incQty,
        decQty,
        addToCart,
        removeProduct,
        toggleCartItemQuantity,
    };

    return <Context.Provider value={value}>{children}</Context.Provider>;
};
export const useStateContext = () => useContext(Context);
