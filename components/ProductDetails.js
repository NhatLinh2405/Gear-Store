/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useState } from "react";
import { client, urlFor } from "../lib/client";
import Product from "./Product";

import { useStateContext } from "../context/StateContext";

import {
    AiOutlineMinus,
    AiOutlinePlus,
    AiFillStar,
    AiOutlineStar,
} from "react-icons/ai";

const ProductDetails = ({ product, products }) => {
    const {
        image,
        name,
        detail,
        price,
        color,
        led,
        materials,
        sensitivity,
        numberOfButtons,
        longevity,
        size,
        weight,
        Switch,
        trademark,
        connect,
        keyCaps,
        keyboardTyle,
        compatible,

        _type,
    } = product;
    const [index, setIndex] = useState(0);
    const { decQty, incQty, qty, addToCart, setShowCart } = useStateContext();

    const handleBuyNow = () => {
        addToCart(product, qty);
        setShowCart(true);
    };

    return (
        <div>
            <div className="product-detail-container">
                <div className="">
                    <div className="image-container">
                        <img
                            src={urlFor(image && image[index])}
                            alt=""
                            className="product-detail-image"
                        />
                    </div>
                    <div className="small-images-container">
                        {image?.map((item, i) => (
                            <img
                                key={i}
                                src={urlFor(item)}
                                alt=""
                                className={
                                    i === index
                                        ? "small-image selected-image"
                                        : "small-image"
                                }
                                onMouseEnter={() => setIndex(i)}
                            />
                        ))}
                    </div>
                </div>
                <div className="product-detail-desc">
                    {_type === "mouse" ? (
                        <>
                            <h1>{name}</h1>
                            <h4>Detail:</h4>
                            <p>{detail}</p>
                            <tbody>
                                <table>
                                    <tr>
                                        <td>
                                            <h4>Weight:</h4>
                                        </td>
                                        <td>
                                            <p>{weight}g</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h4>Color:</h4>
                                        </td>
                                        <td>
                                            <p>{color}</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h4>Size:</h4>
                                        </td>
                                        <td>
                                            <p>{size}</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h4>Switch:</h4>
                                        </td>
                                        <td>
                                            <p>{Switch}</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h4>LED:</h4>
                                        </td>
                                        <td>
                                            <p>{led}</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h4>Materials:</h4>
                                        </td>
                                        <td>
                                            <p>{materials}</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h4>Longevity:</h4>
                                        </td>
                                        <td>
                                            <p>{longevity}</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h4>Sensitivity:</h4>
                                        </td>
                                        <td>
                                            <p>{sensitivity}</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h4>Number Of Button:</h4>
                                        </td>
                                        <td>
                                            <p>{numberOfButtons}</p>
                                        </td>
                                    </tr>
                                </table>
                            </tbody>
                        </>
                    ) : _type === "keyboard" ? (
                        <>
                            <h1>{name}</h1>
                            <h4>Detail:</h4>
                            <p>{detail}</p>
                            <tbody>
                                <table>
                                    <tr>
                                        <td>
                                            <h4>Trademark:</h4>
                                        </td>
                                        <td>
                                            <p>{trademark}</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h4>Connect:</h4>
                                        </td>
                                        <td>
                                            <p>{connect}</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h4>Color:</h4>
                                        </td>
                                        <td>
                                            <p>{color}</p>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <h4>Switch:</h4>
                                        </td>
                                        <td>
                                            <p>{Switch}</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h4>LED:</h4>
                                        </td>
                                        <td>
                                            <p>{led}</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h4>Keyboard Tyle:</h4>
                                        </td>
                                        <td>
                                            <p>{keyboardTyle}</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h4>keyCaps:</h4>
                                        </td>
                                        <td>
                                            <p>{keyCaps}</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h4>Weight:</h4>
                                        </td>
                                        <td>
                                            <p>{weight}g</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h4>Size:</h4>
                                        </td>
                                        <td>
                                            <p>{size}</p>
                                        </td>
                                    </tr>
                                </table>
                            </tbody>
                        </>
                    ) : (
                        <>
                            <h1>{name}</h1>
                            <h4>Detail:</h4>
                            <p>{detail}</p>
                            <tbody>
                                <table>
                                    <tr>
                                        <td>
                                            <h4>Trademark:</h4>
                                        </td>
                                        <td>
                                            <p>{trademark}</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h4>Connect:</h4>
                                        </td>
                                        <td>
                                            <p>{connect}</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h4>Color:</h4>
                                        </td>
                                        <td>
                                            <p>{color}</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h4>LED:</h4>
                                        </td>
                                        <td>
                                            <p>{led}</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h4>Sensitivity:</h4>
                                        </td>
                                        <td>
                                            <p>{sensitivity}</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h4>Weight:</h4>
                                        </td>
                                        <td>
                                            <p>{weight}g</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h4>Compatible:</h4>
                                        </td>
                                        <td>
                                            <p>{compatible}</p>
                                        </td>
                                    </tr>
                                </table>
                            </tbody>
                        </>
                    )}

                    <p className="price">$ {price}</p>
                    <div className="quantity">
                        <h3>Quantity:</h3>
                        <p className="quantity-desc">
                            <span className="minus" onClick={decQty}>
                                <AiOutlineMinus />
                            </span>
                            <span className="num">{qty}</span>
                            <span className="plus" onClick={incQty}>
                                <AiOutlinePlus />
                            </span>
                        </p>
                    </div>
                    <div className="buttons">
                        <button
                            type="button"
                            className="add-to-cart"
                            onClick={() => addToCart(product, qty)}
                        >
                            Add to cart
                        </button>
                        <button
                            type="button"
                            className="buy-now"
                            onClick={handleBuyNow}
                        >
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
            <div className="maylike-product-wrapper">
                <h2>You may also like</h2>
                <div className="marquee">
                    <div className="maylike-products-container track">
                        {products?.map((i) => (
                            <Product key={i._id} product={i} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
