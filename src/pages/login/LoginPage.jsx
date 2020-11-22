/* eslint-disable camelcase */
import React, { useRef, useState } from "react";
import "./login.css";
import { Typography, Button } from "antd";
import { useHistory } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import Axios from "axios";
import useKeyPress from "../../hooks/useKeyPress";
import facebook from "../../images/facebook.svg";
import linkedin from "../../images/LinkedIn.svg";
import twitter from "../../images/Twitter.svg";
import mail from "../../images/Mail.svg";
import instagram from "../../images/instagram.svg";
import github from "../../images/GitHub.svg";

const Login = () => {
    const history = useHistory();

    const [loading, setLoading] = useState(false);

    const onSignUpWithGoogle = (response) => {
        setLoading(true);
        Axios.post(`${process.env.REACT_APP_BACKEND_URL}/users/auth/google/`, {
            access_token: response.accessToken,
        })
            .then((res) => {
                const { data } = res;
                // console.log(res.data);

                return data;
            })
            .then((data) => {
                const { key, username_exists } = data;
                localStorage.setItem("key", `token ${key}`);
                setLoading(false);
                if (!username_exists) {
                    return history.push("/first-login");
                }
                return history.push("/start-now");
            })
            .catch((e) => {
                console.error("Auth backend error", e);
            });
    };

    const googleBtn = useRef(null);

    if (useKeyPress("ArrowDown")) {
        googleBtn.current.focus();
    }

    if (useKeyPress("ArrowUp")) {
        googleBtn.current.focus();
    }

    return (
        <div className="login-page page">
            <div className="login-header">
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
                    <span>
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
                <div className="login-header-background">
                    01000001 01110000 01110000 01110010 01100101 01100011
                    01101001 01100001 01110100 01100101 00100000 01111001
                    01101111 01110101 01110010 00100000 01100011 01110101
                    01110010 01101001 01101111 01110011 01101001 01110100
                    01111001 00101110 00100000 01001110 01101111 01110100
                    00100000 01100001 01101100 01101100 00100000 01110000
                    01101100 01100001 01100011 01100101 01110011 00100000
                    01110111 01101001 01101100 01101100 00100000 01100111
                    01110101 01101001 01100100 01100101 00100000 01111001
                    01101111 01110101 00100000 01110100 01101111 00100000
                    01110100 01101000 01100101 00100000 01100101 01101110
                    01100100 00100000 01100010 01110101 01110100 00100000
                    01110011 01101111 01101101 01100101 00100000 01100100
                    01101111 00101110 00100000 01000001 01101100 01110111
                    01100001 01111001 01110011 00100000 01101100 01101111
                    01101111 01101011 00100000 01101111 01110101 01110100
                    00100000 01100110 01101111 01110010 00100000 01100011
                    01101100 01110101 01100101 01110011 01110011 01110011
                </div>
                <div className="login-heading">
                    <Typography className="login-title">ENIGMA</Typography>
                    <Typography className="login-subtitle">
                        online cryptic hunt
                    </Typography>
                </div>
            </div>
            <div className="login-bottom">
                <div className="login-btn-group">
                    <GoogleLogin
                        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                        onSuccess={onSignUpWithGoogle}
                        onFailure={() => console.log("faliure")}
                        cookiePolicy="single_host_origin"
                        // responseType="code"
                        redirectUri={process.env.REACT_APP_GOOGLE_REDIRECT_URL}
                        render={(renderProps) => (
                            <Button
                                onClick={renderProps.onClick}
                                // disabled={renderProps.disabled}
                                className="login-btn google-btn"
                                type="primary"
                                ref={googleBtn}
                                autofocus
                                loading={loading}
                            >
                                Continue with Google
                            </Button>
                        )}
                    />
                </div>
            </div>
        </div>
    );
};

export default Login;
