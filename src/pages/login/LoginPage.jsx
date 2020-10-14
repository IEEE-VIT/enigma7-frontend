/* eslint-disable camelcase */
import React, { useRef } from "react";
import "./login.css";
import { Typography, Button } from "antd";
import { useHistory } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import Axios from "axios";
import useKeyPress from "../../hooks/useKeyPress";

const Login = () => {
    const history = useHistory();
    const onSignUpWithGoogle = (response) => {
        console.log(response);
        // token 30fba45c588ed7904a70da44cce083c54968ec5f
        Axios.post(
            `${process.env.REACT_APP_BACKEND_URL}/users/auth/google`,
            {
                code: response.code,
                callback_url: "http://127.0.0.1:3000/",
            },
            {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                },
            }
        )
            .then((res) => {
                // eslint-disable-next-line no-unused-vars
                const { key, username_exists } = res;
                console.log(res);
                if (username_exists) {
                    return history.push("/firstLogin");
                }
                return history.push("/menu");
            })
            .catch((e) => {
                console.error("google Auth own backend error", e);
            });
    };
    const googleBtn = useRef(null);
    const appleBtn = useRef(null);

    // useEffect(() => {
    //     googleBtn.current.focus();
    // }, []);

    if (useKeyPress("ArrowDown")) {
        appleBtn.current.focus();
    }

    if (useKeyPress("ArrowUp")) {
        googleBtn.current.focus();
    }

    return (
        <div className="login-page page">
            <div className="login-header">
                <div className="login-header-background">
                    100101001010100100101011010101001010011001001010110101010010100110010010101101010100101001100100101011010101001010011001001010110101010010100110010010101101010100101001100100101011010101001010011001001010110101010010100110010010101101010100101001100100101011010101001010011001001010110101010010100110010010101101010100101001100100101011010101001010011001001010110101010010100110010010101101010100101001100100101011010101001010011001001010110101010010100110010010101101010100101001100100101011010101001010011001001010110101010010100110010010101101010100101001100100101011010101001010011001001010110101010010100110010010101101010100101001100100101011010101001010011001001010110101010010100110010010101101010100101001100100101011010101001010011001001010110101010010100110010010101101010100101001100100101011010101001010011001001010110101010010100110010010101101010100101001100100101011010101001010011001001010110101010010100110010010101101010100101001100100101011010101001010011001001010110101010010100
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
                        clientId={process.env.REACT_APP_CLIENT_ID}
                        onSuccess={onSignUpWithGoogle}
                        onFailure={() => console.log("faliure")}
                        cookiePolicy="single_host_origin"
                        responseType="code"
                        render={(renderProps) => (
                            <Button
                                onClick={renderProps.onClick}
                                disabled={renderProps.disabled}
                                className="login-btn"
                                type="primary"
                                ref={googleBtn}
                                autofocus
                            >
                                Sign up with Google
                            </Button>
                        )}
                    />

                    <Button
                        onClick={() => "apple login"}
                        className="login-btn"
                        type="primary"
                        ref={appleBtn}
                    >
                        Sign up with Apple
                    </Button>
                </div>
                <div className="login-footer">
                    Use ARROW to navigate | Press ENTER to continue
                </div>
            </div>
        </div>
    );
};

export default Login;
