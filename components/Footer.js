import React from "react";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

export default function Footer() {
    return (
        <div className="footer-container">
            <p>2022 Shadow Headphones All rights reservers</p>
            <p className="icons">
                <AiFillInstagram />
                <AiOutlineTwitter />
            </p>
        </div>
    );
}
