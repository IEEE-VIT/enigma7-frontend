/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from "react";
import { Layout, Progress, Input, Button } from "antd";
import "./question.css";
import Modal from "antd/lib/modal/Modal";
import { useHistory } from "react-router-dom";
import NavBar from "../../components/navbar/navbar";
import useKeyPress from "../../hooks/useKeyPress";

const { Content } = Layout;

const Question = () => {
    const [modal, showModal] = useState(false);
    const [answer, setAnswer] = useState("");
    const history = useHistory();
    if (useKeyPress("Escape")) {
        history.push("/main");
    }

    const onAnswer = () => {
        console.log("Answer:", answer);
        showModal(true);
    };

    const selectPower1 = () => {
        console.log("power1");
        showModal(true);
    };
    const selectPower2 = () => {
        console.log("power2");
        showModal(true);
    };
    const selectPower3 = () => {
        console.log("power3");
        showModal(true);
    };
    const onHintClick = () => {
        console.log("used hint");
        showModal(true);
    };

    const handleOk = (e) => {
        console.log(e);
        showModal(false);
    };

    const handleCancel = (e) => {
        console.log(e);
        showModal(false);
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
                    <div className="question-hint-btn" onClick={onHintClick}>
                        [ Use hint ]
                    </div>
                    <Input
                        onChange={(event) => setAnswer(event.target.value)}
                        className="question-input"
                    />

                    <Button
                        type="primary"
                        className="question-btn"
                        htmlType="submit"
                        onClick={onAnswer}
                    >
                        Submit
                    </Button>
                </div>
                <Modal
                    visible={modal}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    okText="Yes"
                    closable={false}
                    title="    "
                    autoFocusButton="ok"
                    okType
                >
                    <p>Some contents...</p>
                </Modal>
            </Content>
        </Layout>
    );
};

export default Question;
