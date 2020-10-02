import React, { useRef } from "react";
import "./login.css";
import { Typography, Button } from "antd";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { GoogleLogin } from "react-google-login";
import useKeyPress from "../../hooks/useKeyPress";

const Login = () => {
    const history = useHistory();
    const onSignUpWithGoogle = () => {
        console.log(process.env.REACT_APP_CLIENT_ID);
        axios({
            method: "get",
            url: `https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=http%3A%2F%2F127.0.0.1%3A8000%2F&response_type=code&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email&https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&access_type=offline&flowName=GeneralOAuthFlow`,
            headers: { "Access-Control-Allow-Origin": "*" },
        })
            .then((response) => {
                // handle success
                console.log("google first endpoint", response);
                history.push("/firstLogin");
            })
            .catch((error) => {
                // handle error
                console.log(error);
            })
            .then(() => {
                // always executed
            });
        // axios
        //     .get(
        //         `https://accounts.google.com/o/oauth2/v2/auth?
        //     scope=profile+email&
        //     access_type=offline&
        //     redirect_uri="http://localhost:3000/"&
        //     response_type=code&
        //     client_id="${process.env.REACT_APP_CLIENT_ID}"`
        //     )

        // history.push("/firstLogin");
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
                        buttonText="Login"
                        onSuccess={() => console.log("suucess")}
                        onFailure={() => console.log("faliure")}
                        cookiePolicy="single_host_origin"
                    />
                    <Button
                        onClick={onSignUpWithGoogle}
                        className="login-btn"
                        type="primary"
                        ref={googleBtn}
                        autofocus
                    >
                        Sign up with Google
                    </Button>
                    <Button
                        onClick={onSignUpWithGoogle}
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
