import React, { useState } from "react";
import { Button, Input, Radio, Select } from "antd";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import useKeyPress from "../../hooks/useKeyPress";

import "./firstLogin.css";

const { Option } = Select;

const FirstLogin = () => {
    const [error, setError] = useState();
    const [footer] = useState("Press ENTER to continue");
    const [username, setUsername] = useState("false");
    const [collegeStudent, setCollegeStudent] = useState("false");
    const [outreach, setOutreach] = useState("false");
    const [year, setYear] = useState("");
    const [loading, setLoading] = useState(false);

    const history = useHistory();
    // const onFinish = (values) => {
    //     console.log(values);
    //     setError("error 404! no backend found");
    // };
    // if (useKeyPress("Enter")) {
    //     console.log("done");
    //     onFinish();
    //     // history.push("/startNow");
    // }

    const onFinish = async () => {
        const key = localStorage.getItem("key");
        console.log(username, collegeStudent, year, outreach);
        if (!username || !collegeStudent || !year || !outreach) {
            setError("Enter the required values");
        }
        setLoading(true);
        Axios.patch(
            `${process.env.REACT_APP_BACKEND_URL}/users/me/edit/`,
            {
                username,
            },
            {
                headers: {
                    Authorization: key,
                },
            }
        )
            .then((res) => {
                console.log(res.data);
                setLoading(false);
            })
            .then(() => {
                Axios.post(
                    `${process.env.REACT_APP_BACKEND_URL}/users/outreach/`,
                    {
                        outreach,
                        is_college_student: collegeStudent,
                        year,
                    },
                    {
                        headers: {
                            Authorization: key,
                        },
                    }
                )
                    .then(() => {
                        console.log("?startnow");
                        history.push("/startNow");
                    })
                    .catch((err) => {
                        console.error("error sending first login", err);
                    });
            })
            .catch((err) => {
                console.error("error sending username", err);
            });
    };

    if (useKeyPress("Enter")) {
        console.log("done");
        onFinish();
        // history.push("/startNow");
    }

    return (
        <div className="page first-login">
            <div>
                <div className="first-login-heading">Profile setup</div>
                <div className="first-login-content">
                    <div className="first-login-question">
                        How you want to be know as?
                        <br /> [this can’t be edited later]
                    </div>
                    <Input
                        autoComplete="off"
                        className="first-login-input question-input"
                        onChange={(e) => {
                            setUsername(e.target.value);
                        }}
                    />
                    <div className="first-login-question">
                        Where did you hear about us?
                    </div>
                    <br />
                    <Select
                        defaultValue="Word of mouth"
                        style={{ width: 200 }}
                        onChange={(value) => setOutreach(value)}
                    >
                        <Option value="Twitter">Twitter</Option>
                        <Option value="Instagram">Instagram</Option>
                        <Option value="Facebook">Facebook</Option>
                        <Option value="Reddit">Reddit</Option>
                        <Option value="E-Mail">E-Mail</Option>
                        <Option value="WhatsApp">WhatsApp</Option>
                        <Option value="Word of mouth">Word of mouth</Option>
                        <Option value="Other">Other</Option>
                    </Select>
                    <br />
                    <br />
                    <div className="first-login-question">
                        Are you a College Student?
                    </div>
                    <br />
                    <Radio.Group
                        style={{ margin: "1rem" }}
                        onChange={(e) => setCollegeStudent(e.target.value)}
                    >
                        <Radio.Button value="true">Yes</Radio.Button>
                        <Radio.Button value="false">No</Radio.Button>
                    </Radio.Group>
                    <br />
                    <br />
                    <div className="first-login-question">
                        Which year do you study in?
                    </div>
                    <br />
                    <Select
                        onChange={(value) => setYear(value)}
                        style={{ width: 200, backgroundColor: "#182f24" }}
                        dropdownStyle={{ backgroundColor: "#182f24" }}
                    >
                        <Option value="2020">2020</Option>
                        <Option value="2021">2021</Option>
                        <Option value="2022">2022</Option>
                        <Option value="2023">2023</Option>
                        <Option value="2024">2024</Option>
                    </Select>
                    <br />
                    <br />

                    <Button
                        onClick={onFinish}
                        type="primary"
                        htmlType="submit"
                        loading={loading}
                        className="login-btn"
                    >
                        Submit
                    </Button>

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
        </div>
    );
};

export default FirstLogin;
