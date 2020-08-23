/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Layout, Progress, Form, Input, Button } from "antd";
import "./question.css";
import NavBar from "../../components/navbar/navbar";

const { Content } = Layout;

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

const Question = () => {
    const onFinish = (values) => {
        console.log("Answer:", values);
    };

    const selectPower1 = () => {
        console.log("power1");
    };
    const selectPower2 = () => {
        console.log("power2");
    };
    const selectPower3 = () => {
        console.log("power3");
    };

    return (
        <Layout className="page">
            <NavBar />
            <Content className="question-body">
                <Progress
                    strokeColor={{
                        "0%": "#145E14",
                        "100%": "#26DF21",
                    }}
                    strokeWidth="7px"
                    showInfo="false"
                    percent={80}
                    // status="active"
                    // trailColor="#080E07"
                />
                <div className="question-header">
                    <div
                        className="question-powerup-box"
                        onClick={selectPower1}
                    >
                        powerup
                    </div>
                    <div
                        className="question-powerup-box"
                        onClick={selectPower2}
                    >
                        powerup
                    </div>
                    <div
                        className="question-powerup-box"
                        onClick={selectPower3}
                    >
                        powerup
                    </div>
                </div>
                <div className="question-main">
                    <div>
                        <div className="question-no">Q1.</div>
                        <div className="question-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit?
                        </div>
                    </div>
                    <div className="question-box">picture</div>
                    <div className="question-hint-btn">[ Use hint ]</div>
                    <Form
                        {...layout}
                        name="basic"
                        onFinish={onFinish}
                        className="question-form"
                    >
                        <Form.Item
                            name="Answer"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your answer!",
                                },
                            ]}
                        >
                            <Input className="question-input" />
                        </Form.Item>

                        <Form.Item {...tailLayout}>
                            <Button
                                type="primary"
                                className="question-btn"
                                htmlType="submit"
                            >
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </Content>
        </Layout>
    );
};

export default Question;
