import React from "react";
import Head from "next/head";

import Navbar from "./Navbar";
import Footer from "./Footer";
// ko cothi cha bao loi ?
export default function Layout({ children }) {
    return (
        <div className="layout">
            <Head>
                <title>Nhật Linh Store</title>
            </Head>
            <header>
                <Navbar />
            </header>
            <main className="main-container">{children}</main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}
