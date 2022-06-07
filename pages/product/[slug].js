/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useState } from "react";
import { client, urlFor } from "../../lib/client";
import { Product } from "../../components";

import { useStateContext } from "../../context/StateContext";

import {
    AiOutlineMinus,
    AiOutlinePlus,
    AiFillStar,
    AiOutlineStar,
} from "react-icons/ai";

const ProductDetails = ({ product, products }) => {
    const { image, name, detail, price } = product;
    const [index, setIndex] = useState(0);
    const { decQty, incQty, qty, addToCart } = useStateContext();

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
                    <h1>{name}</h1>
                    <div className="reviews">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />
                    </div>
                    <p>(20)</p>
                    <h4>Detail:</h4>
                    <p>{detail}</p>
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
                        <button type="button" className="buy-now" onClick="">
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

export const getStaticPaths = async () => {
    const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

    const products = await client.fetch(query);

    const paths = products.map((product) => ({
        params: {
            slug: product.slug.current,
        },
    }));

    return {
        paths,
        fallback: "blocking",
    };
};

export const getStaticProps = async ({ params: { slug } }) => {
    const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
    const productsQuery = '*[_type == "product"]';

    const product = await client.fetch(query);
    const products = await client.fetch(productsQuery);

    return {
        props: { products, product },
    };
};