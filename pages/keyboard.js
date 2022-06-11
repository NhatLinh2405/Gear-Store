import React from "react";

import { Cards } from "../components";
import { client } from "../lib/client";

const Home = ({ products }) => {
    return (
        <>
            <div className="products-banner">
                <h3>Keyboard</h3>
                <p>
                    Gaming keyboards will help players to have a better
                    experience for gaming, which is the norm for todays gamers.
                </p>
            </div>
            <Cards products={products} type="keyboard" />
        </>
    );
};

export const getServerSideProps = async () => {
    const query = '*[_type == "keyboard"]';
    const products = await client.fetch(query);

    return {
        props: { products },
    };
};
export default Home;
