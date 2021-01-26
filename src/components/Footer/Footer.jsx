import React from "react";

import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer-container">
            <span className="footer-text">
                Help us make your experience better for the future by filling
                out this{" "}
            </span>
            <a
                target="_blank"
                rel="noopener noreferrer"
                className="cursor"
                href="https://forms.gle/pQjiUq8MinXzbFjB6"
            >
                <u>form</u>
            </a>
        </div>
    );
};

export default Footer;
