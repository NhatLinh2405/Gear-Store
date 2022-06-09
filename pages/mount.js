import React from "react";

import { Cards } from "../components";
import { client } from "../lib/client";

const Home = ({ products }) => {
    return (
        <>
            <div className="products-banner">
                <h3>Mount</h3>
                <p>
                    A variety of hand painted canvases of different sizes. Good
                    for the wall design.
                </p>
            </div>
            <Cards products={products} type="mount" />
        </>
    );
};

export const getServerSideProps = async () => {
    const query = '*[_type == "mount"]';
    const products = await client.fetch(query);

    return {
        props: { products },
    };
};
export default Home;
