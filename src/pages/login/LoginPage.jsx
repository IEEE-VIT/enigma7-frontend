/* eslint-disable camelcase */
import React, { useRef, useState } from "react";
import "./login.css";
import { Typography, Button } from "antd";
import { useHistory } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import Axios from "axios";
import useKeyPress from "../../hooks/useKeyPress";

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
                    return history.push("/firstLogin");
                }
                return history.push("/startNow");
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
                                className="login-btn"
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
