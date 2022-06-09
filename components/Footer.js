import React from "react";
import { AiFillGithub } from "react-icons/ai";

import { FaFacebook } from "react-icons/fa";

export default function Footer() {
    return (
        <div className="footer-container">
            <p>2022 Shadow Headphones All rights reservers</p>
            <p className="icons">
                <a
                    target="_blank"
                    href="https://github.com/NhatLinh2405"
                    className="social-icon "
                    rel="noreferrer"
                >
                    <AiFillGithub />
                </a>
                <a
                    target="_blank"
                    href="https://www.facebook.com/lays.linh.96"
                    className="social-icon "
                    rel="noreferrer"
                >
                    <FaFacebook />
                </a>
            </p>
        </div>
    );
}
