/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

import { urlFor } from "../lib/client";

export default function HeroBanner({
    heroBanner: {
        smallText,
        midText,
        largeText,
        image,
        product,
        buttonText,
        decs,
    },
}) {
    return (
        <div className="hero-banner-container">
            <div className="">
                <p className="beats-solo">{smallText}</p>
                <h3 className="">{midText}</h3>
                <h1 className="">{largeText}</h1>
                <img
                    src={urlFor(image)}
                    alt="headphones"
                    className="hero-banner-image"
                />
                <div className="">
                    <Link href={`/product/${product}`}>
                        <button type="button">{buttonText}</button>
                    </Link>
                    <div className="desc">
                        <h5>DESCRIPTION</h5>
                        <p>{decs}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
