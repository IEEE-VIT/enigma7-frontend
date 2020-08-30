import React, { useState } from "react";
import "./firstLogin.css";
import { Form, Input } from "antd";

const FirstLogin = () => {
    const [error, setError] = useState();
    const [footer, setFooter] = useState("Press ENTER to continue");
    const onFinish = (values) => {
        console.log(values);
        setError("error 404! no backend found");
    };

    const onValuesChange = (values) => {
        if (values.username === "") {
            return setFooter("Press ENTER to continue");
        }
        return setFooter("Press ENTER to continue | BACSKSPACE to clear");
    };

    return (
        <div className="page first-login">
            <div>
                <div className="first-login-heading">Profile setup</div>
                <div className="first-login-content">
                    <div className="first-login-question">
                        How you want to be know as
                        <br /> [this can’t be edited later]
                    </div>
                    <Form
                        name="basic"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onValuesChange={onValuesChange}
                    >
                        <Form.Item name="username">
                            <Input
                                autocomplete="off"
                                className="first-login-input question-input"
                            />
                        </Form.Item>
                    </Form>
                    {error ? (
                        <div className="first-login-question">
                            ________________
                            <br />
                            InvalidUsername. <br /> -&gt; {error}!
                        </div>
                    ) : null}
                </div>
            </div>
            <div className="first-login-footer">{footer}</div>
            {/* {error ? (
                <div className="first-login-footer">
                    Press ENTER to continue
                </div>
            ) : (
                <div className="first-login-footer">
                    Press ENTER to continue | BACSKSPACE to clear{" "}
                </div>
            )} */}
        </div>
    );
};

export default FirstLogin;
