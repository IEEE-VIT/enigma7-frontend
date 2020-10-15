/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from "react";
import { Layout, Progress, Input, Button } from "antd";
import "./question.css";
import Modal from "antd/lib/modal/Modal";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import NavBar from "../../components/navbar/navbar";
import useKeyPress from "../../hooks/useKeyPress";

const { Content } = Layout;

const Question = () => {
    const history = useHistory();

    const [modal, showModal] = useState(false);
    const [modalText, setModalText] = useState("Default modal text");

    const [answer, setAnswer] = useState("");
    const [question, setQuestion] = useState("");
    const [img, setImg] = useState("");
    const [questionId, setQuestionId] = useState("");

    const key = localStorage.getItem("key");
    console.log("key from local storage:>>", key);

    useEffect(() => {
        // get question
        Axios.get(`${process.env.REACT_APP_BACKEND_URL}/game/question`, {
            headers: {
                Authorization: key,
            },
        })
            .then((res) => {
                const { data } = res;
                setQuestion(data.text);
                setImg(data.img_url);
                setQuestionId(data.id);
                console.log(data);
            })
            .catch((err) => {
                console.error("error in get question", err);
            });
    }, []);
    if (useKeyPress("Escape")) {
        history.push("/menu");
    }

    const onAnswer = () => {
        console.log("Answer:", answer);
        Axios.post(
            `${process.env.REACT_APP_BACKEND_URL}/game/answer/`,
            {
                answer,
            },
            {
                headers: {
                    Authorization: key,
                },
            }
        )
            .then((res) => {
                const { data } = res;
                console.log("answer:>>", data);
                return data;
            })
            .then((data) => {
                // eslint-disable-next-line no-shadow
                const { answer, close_answer, detail } = data;
                // eslint-disable-next-line camelcase
                setModalText(`${answer},${close_answer}, ${detail}`);
                console.log(data);
                showModal(true);
            })
            .catch((err) => {
                console.error("error in get question", err);
            });
    };

    const selectHintPower = () => {
        Axios.get(`${process.env.REACT_APP_BACKEND_URL}/game/powerup/hint`, {
            headers: {
                Authorization: key,
            },
        })
            .then((res) => {
                const { data } = res;
                console.log(data);
                return data;
            })
            .then((data) => {
                setModalText(data.detail);
                showModal(true);
            })
            .catch((err) => {
                console.error("error in get question", err);
            });
    };
    const selectSkipPower = () => {
        Axios.post(
            `${process.env.REACT_APP_BACKEND_URL}/game/powerup/skip/`,
            {},
            {
                headers: {
                    Authorization: key,
                },
            }
        )
            .then((res) => {
                const { data } = res;
                console.log("Skip:>>", data);
                return data;
            })
            .then((data) => {
                const { status, detail } = data;
                setModalText(`${status},${detail}`);
                showModal(true);
            })
            .catch((err) => {
                console.error("error in get question", err);
            });
    };

    const selectCloseAnsPower = () => {
        console.log("close ans");

        Axios.post(
            `${process.env.REACT_APP_BACKEND_URL}/game/powerup/close-answer/`,
            {},
            {
                headers: {
                    Authorization: key,
                },
            }
        )
            .then((res) => {
                const { data } = res;
                console.log("Close Ans:>>", data);
                return data;
            })
            .then((data) => {
                const { status, detail } = data;
                setModalText(`${status},${detail}`);
                showModal(true);
            })
            .catch((err) => {
                console.error("error in get question", err);
            });
        showModal(true);
    };
    const onHintClick = () => {
        console.log("used hint");
        Axios.get(`${process.env.REACT_APP_BACKEND_URL}/game/hint`, {
            headers: {
                Authorization: key,
            },
        })
            .then((res) => {
                const { data } = res;
                console.log(data);
                return data;
            })
            .then((data) => {
                setModalText(data.hint);
                showModal(true);
            })
            .catch((err) => {
                console.error("error in get question", err);
            });
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
                        onClick={selectHintPower}
                    >
                        hint
                    </div>
                    <div
                        className="question-powerup-box"
                        onClick={selectSkipPower}
                    >
                        skip
                    </div>
                    <div
                        className="question-powerup-box"
                        onClick={selectCloseAnsPower}
                    >
                        close ans
                    </div>
                </div>
                <div className="question-main">
                    <div>
                        <div className="question-no">Q{questionId}.</div>
                        <div className="question-text">{question}</div>
                    </div>
                    <img
                        alt="enigma question"
                        src={img}
                        className="question-box"
                    />
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
                    <p>{modalText}</p>
                </Modal>
            </Content>
        </Layout>
    );
};

export default Question;
