import React from "react";
import "./login.css";
import { Typography, Button } from "antd";
import { useHistory } from "react-router-dom";

const Login = () => {
    const history = useHistory();
    const onSignUpWithGoogle = () => {
        history.push("/firstLogin");
    };
    return (
        <div className="login-page page">
            <div className="login-header">
                <div className="login-header-background">
                    100101001010100100101011010101001010011001001010110101010010100110010010101101010100101001100100101011010101001010011001001010110101010010100110010010101101010100101001100100101011010101001010011001001010110101010010100110010010101101010100101001100100101011010101001010011001001010110101010010100110010010101101010100101001100100101011010101001010011001001010110101010010100110010010101101010100101001100100101011010101001010011001001010110101010010100110010010101101010100101001100100101011010101001010011001001010110101010010100110010010101101010100101001100100101011010101001010011001001010110101010010100110010010101101010100101001100100101011010101001010011001001010110101010010100110010010101101010100101001100100101011010101001010011001001010110101010010100110010010101101010100101001100100101011010101001010011001001010110101010010100110010010101101010100101001100100101011010101001010011001001010110101010010100110010010101101010100101001100100101011010101001010011001001010110101010010100
                </div>
                <div className="login-heading">
                    <Typography className="login-title">Enigma</Typography>
                    <Typography className="login-subtitle">
                        online cryptic hunt
                    </Typography>
                </div>
            </div>
            <div className="login-bottom">
                <div className="login-btn-group">
                    <Button
                        onClick={onSignUpWithGoogle}
                        className="login-btn"
                        type="primary"
                    >
                        Sign up with Google
                    </Button>
                    <Button
                        onClick={onSignUpWithGoogle}
                        className="login-btn"
                        type="primary"
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
