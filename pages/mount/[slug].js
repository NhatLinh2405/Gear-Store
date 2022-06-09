import React from "react";
import { client } from "../../lib/client";
import { ProductDetails } from "../../components";

const Mount = ({ product, products }) => {
    return <ProductDetails products={products} product={product} />;
};

export const getStaticPaths = async () => {
    const query = `*[_type == "mount"] {
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
    const query = `*[_type == "mount" && slug.current == '${slug}'][0]`;
    const productsQuery = '*[_type == "mount"]';

    const product = await client.fetch(query);
    const products = await client.fetch(productsQuery);

    return {
        props: { products, product },
    };
};

export default Mount;
