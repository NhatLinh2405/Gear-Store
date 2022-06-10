/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

import { urlFor } from "../lib/client";

export default function Product({
    product: { image, name, slug, price,_type },
}) {
    return (
        <div>
            <Link href={`/${_type}/${slug.current}`}>
                <a href="">
                    <div className="product-card">
                        <img
                            src={urlFor(image && image[0])}
                            alt="headphones"
                            width={250}
                            height={250}
                            className="product-image"
                        />
                        <p className="product-name">{name}</p>
                        <p className="product-price">$ {price}</p>
                    </div>
                </a>
            </Link>
        </div>
    );
}
