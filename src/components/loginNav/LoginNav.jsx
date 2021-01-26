import React from "react";
import facebook from "../../images/facebook.svg";
import linkedin from "../../images/LinkedIn.svg";
import twitter from "../../images/Twitter.svg";
import mail from "../../images/Mail.svg";
import instagram from "../../images/instagram.svg";
import github from "../../images/GitHub.svg";

const LoginNav = () => {
    return (
        <div className="login-nav">
            <span className="login-nav-text">
                Organised by{" "}
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor"
                    href="https://ieeevit.org/"
                >
                    <u>IEEE VIT</u>
                </a>
                . Reach out to us at
            </span>
            &nbsp;
            <span style={{ display: "flex" }}>
                <span className="login-nav-icon">
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor"
                        href="https://www.instagram.com/ieeevitvellore/?hl=en"
                    >
                        <img src={instagram} alt="" />
                    </a>
                </span>
                <span className="login-nav-icon">
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor"
                        href="https://twitter.com/ieeevitvellore"
                    >
                        <img src={twitter} alt="" />
                    </a>
                </span>
                <span className="login-nav-icon">
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor"
                        href="https://www.facebook.com/IEEEVIT/"
                    >
                        <img src={facebook} alt="" />
                    </a>
                </span>
                <span className="login-nav-icon">
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor"
                        href="https://www.linkedin.com/company/ieee-vit-vellore/"
                    >
                        <img src={linkedin} alt="" />
                    </a>
                </span>
                <span className="login-nav-icon">
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor"
                        href="https://github.com/ieee-vit"
                    >
                        <img src={github} alt="" />
                    </a>
                </span>
                <span className="login-nav-icon">
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor"
                        href="mailto:contact@ieeevit.org"
                    >
                        <img src={mail} alt="" />
                    </a>
                </span>
            </span>
        </div>
    );
};

export default LoginNav;
