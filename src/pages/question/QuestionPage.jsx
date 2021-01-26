/* eslint-disable consistent-return */
/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from "react";
import { Layout, Progress, Input, Button, notification } from "antd";
import "./question.css";
import Modal from "antd/lib/modal/Modal";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import NavBar from "../../components/navbar/navbar";
import useKeyPress from "../../hooks/useKeyPress";

import questionMarkBright from "../../images/quesionMarkBright.svg";
import similar from "../../images/Similar.svg";
import skip from "../../images/skip.svg";

import wrongAnswer from "../../images/wrongAnswer.png";
import closeAnswer from "../../images/closeAnswer.png";
import correctAnswer from "../../images/correctAnswer.png";
import LoadingPage from "../loadingPage/LoadingPage";
import isMobile from "../../utils/checkMobile";
import Footer from "../../components/Footer/Footer";

const { Content } = Layout;

const Question = () => {
    const history = useHistory();

    const [modal, showModal] = useState(false);
    const [modalText, setModalText] = useState("");
    const [modalImage, setModalImage] = useState();

    const [buttonModal, setButtonModal] = useState(false);
    const [buttonModalText, setbuttonModalText] = useState("");
    const [powerType, setPowerType] = useState("");

    const [hintUsed, setHintUsed] = useState(false);
    // States to use in order to disable the power buttons
    // const [setcloseAnswerPowerup] = useState(false);
    const [hintPowerup, setHintPowerup] = useState(false);
    // const [setskipPowerup] = useState(false);

    // loading page
    const [loadingPage, setLoadingPage] = useState(true);

    const [xp, setXp] = useState();
    const [xpTime, setXpTime] = useState();

    const [answer, setAnswer] = useState("");
    const [question, setQuestion] = useState("");
    const [img, setImg] = useState("");
    const [questionId, setQuestionId] = useState("");
    // const [isHintUsed, setIsHintUsed] = useState(false);

    const key = localStorage.getItem("key");

    // eslint-disable-next-line consistent-return
    useEffect(() => {
        if (isMobile()) {
            return history.push("/download");
        }
        // eslint-disable-next-line
    }, []);

    const getXP = () => {
        // console.log(xpTime);
        Axios.get(`${process.env.REACT_APP_BACKEND_URL}/users/me/`, {
            headers: {
                Authorization: key,
            },
        })
            .then((res) => {
                const { data } = res;
                setXp(data.xp);
                // setcloseAnswerPowerup(data.user_status.accept_close_answer);
                setHintPowerup(data.user_status.hint_powerup);
                // setskipPowerup(data.user_status.skip_powerup);
                setHintUsed(data.user_status.hint_used);
                // console.log(data);
            })
            .catch((err) => {
                console.error("error in get xp", err);
                notification.error({
                    message: "Sorry!",
                    description: "Something Went Wrong, Please try again",
                    style: {
                        background: "#26df21",
                    },
                    duration: 0,
                });
            });
    };

    useEffect(() => {
        // get user
        getXP();

        // get question
        Axios.get(`${process.env.REACT_APP_BACKEND_URL}/game/web/question/`, {
            headers: {
                Authorization: key,
            },
        })
            .then((res) => {
                const { data } = res;
                setQuestion(data.text);
                setImg(data.img_url);
                setQuestionId(data.order);
                // console.log(data);
            })
            .then(() => {
                setLoadingPage(false);
            })
            .catch((err) => {
                console.error("error in get question", err);
                notification.error({
                    message: "Sorry!",
                    description: "Something Went Wrong, Please try again",
                    style: {
                        background: "#26df21",
                    },
                    duration: 0,
                });
            });

        // xptime
        Axios.get(`${process.env.REACT_APP_BACKEND_URL}/game/xp-time/`, {
            headers: {
                Authorization: key,
            },
        })
            .then((res) => {
                const { data } = res;
                setXpTime(data.time_left);

                // console.log(data);
            })
            .then(() => {
                setTimeout(() => {
                    // console.log("fire xpTime", xpTime);
                    getXP();
                }, xpTime);
            })
            .catch((err) => {
                console.error("error in get xpTime", err);
                notification.error({
                    message: "Sorry!",
                    description: "Something Went Wrong, Please try again",
                    style: {
                        background: "#26df21",
                    },
                    duration: 0,
                });
            });
        // eslint-disable-next-line
    }, []);

    if (useKeyPress("Escape")) {
        history.push("/menu");
    }

    const onAnswer = () => {
        // console.log("Answer:", answer);
        Axios.post(
            `${process.env.REACT_APP_BACKEND_URL}/game/web/answer/`,
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
                // console.log("answer:>>", data);
                return data;
            })
            .then((data) => {
                // eslint-disable-next-line no-shadow
                const { answer, close_answer, detail } = data;
                if (!answer && !close_answer) {
                    setModalImage(wrongAnswer);
                    setModalText(`${detail}`);
                } else if (close_answer) {
                    setModalImage(closeAnswer);
                    setModalText(`${detail}`);
                } else if (answer) {
                    setModalImage(correctAnswer);
                    setModalText(`Correct Response`);
                    history.push("/new-story");
                    // eslint-disable-next-line no-restricted-globals
                    // location.reload();
                }
                // eslint-disable-next-line camelcase
                // setModalText(`${answer},${close_answer}, ${detail}`);
                // console.log(data);
                showModal(true);
            })
            .catch((err) => {
                console.error("error in send answer", err);
                notification.error({
                    message: "Sorry!",
                    description: "Something Went Wrong, Please try again",
                    style: {
                        background: "#26df21",
                    },
                    duration: 0,
                });
            });
    };

    if (useKeyPress("Enter")) {
        onAnswer();
    }

    const selectHintPower = () => {
        setButtonModal(false);
        Axios.get(`${process.env.REACT_APP_BACKEND_URL}/game/powerup/hint`, {
            headers: {
                Authorization: key,
            },
        })
            .then((res) => {
                const { data } = res;
                // console.log(data);
                return data;
            })
            .then((data) => {
                setHintUsed(true);
                setModalImage("");
                setModalText(data.hint || "Insufficient xp");
                showModal(true);
                getXP();
            })
            .catch((err) => {
                console.error("error in get powerup", err);
                notification.error({
                    message: "Sorry!",
                    description: "Something Went Wrong, Please try again",
                    style: {
                        background: "#26df21",
                    },
                    duration: 0,
                });
            });
    };
    const selectSkipPower = () => {
        setButtonModal(false);
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
                // console.log("Skip:>>", data);
                return data;
            })
            .then((data) => {
                if (data.question_id) {
                    return history.push("/new-story");
                }
                setModalImage("");
                setModalText(data.detail || "Something went wrong");
                showModal(true);
                getXP();
            })
            .catch((err) => {
                console.error("error in get powerup", err);
                notification.error({
                    message: "Sorry!",
                    description: "Something Went Wrong, Please try again",
                    style: {
                        background: "#26df21",
                    },
                    duration: 0,
                });
            });
    };

    const selectCloseAnsPower = () => {
        setButtonModal(false);
        // console.log("close ans");

        Axios.post(
            `${process.env.REACT_APP_BACKEND_URL}/game/powerup/close-answer/`,
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
                // console.log("Close Ans:>>", data);
                return data;
            })
            .then((data) => {
                // const { status, detail } = data;
                if (data.question_id) {
                    return history.push("/new-story");
                }
                setModalImage("");
                setModalText(data.detail);
                showModal(true);
                getXP();
            })
            .catch((err) => {
                console.error("error in get powerup", err);
                notification.error({
                    message: "Sorry!",
                    description: "Something Went Wrong, Please try again",
                    style: {
                        background: "#26df21",
                    },
                    duration: 0,
                });
            });
        showModal(true);
    };

    const onHintClick = () => {
        setButtonModal(false);
        // console.log("used hint");
        Axios.get(`${process.env.REACT_APP_BACKEND_URL}/game/web/hint`, {
            headers: {
                Authorization: key,
            },
        })
            .then((res) => {
                const { data } = res;
                // console.log(data);
                return data;
            })
            .then((data) => {
                setHintUsed(true);
                // console.log(data.hint);
                setModalImage("");
                setModalText(`Hint - > ${data.hint}`);
                // setModalText(data.hint);
                showModal(true);
            })
            .catch((err) => {
                console.error("error in get hint", err);
                notification.error({
                    message: "Sorry!",
                    description: "Something Went Wrong, Please try again",
                    style: {
                        background: "#26df21",
                    },
                    duration: 0,
                });
            });
    };

    // const confirmHintModal = () => {
    //     setModalImage();
    //     setModalText(
    //         "Are you sure you want to use hint? [this will deduct points]"
    //     );
    //     showModal(true);
    // };

    const handleOk = () => {
        switch (powerType) {
            case "hintpower":
                // console.log("hint power up used");
                selectHintPower();
                break;
            case "closepower":
                // console.log("close answer power up used");
                selectCloseAnsPower();
                break;
            case "skippower":
                // console.log("skip question power up used");
                selectSkipPower();
                break;
            case "hintused":
                // console.log("hint used");
                onHintClick();
                break;
            default:
                console.log("Invalid power up");
        }
    };

    const setPowerTypeFunction = (power) => {
        // console.log(power);
        setPowerType(power);
        if (power === "hintused" && (hintUsed || hintPowerup)) {
            // console.log("hint is used");
            onHintClick();
            return;
        }
        if (power === "hintused") {
            setbuttonModalText(
                "Are you sure you want to use hint? [this will deduct points]"
            );
        } else {
            setbuttonModalText("Are you sure you want to use this power ?");
        }
        setButtonModal(true);
    };

    const handleCancel = () => {
        // console.log(e);
        setButtonModal(false);
    };

    const handleOk2 = () => {
        // console.log(e);
        showModal(false);
    };

    const handleCancel2 = () => {
        // console.log(e);
        showModal(false);
    };

    if (loadingPage) {
        return <LoadingPage />;
    }

    const firstStory = localStorage.getItem("firstStory");
    // console.log("result", questionId === 1 && firstStory);

    if (questionId === 1 && firstStory === "true") {
        localStorage.setItem("firstStory", 0);
        history.push("/new-story");
    }

    return (
        <Layout className="page">
            <NavBar />
            <Content className="question-body">
                <Progress
                    strokeColor={{
                        "0%": "#145E14",
                        "100%": "#26DF21",
                    }}
                    strokeWidth="25px"
                    showInfo
                    percent={xp}
                    status="active"
                    trailColor="#0D1811"
                    strokeLinecap="square"
                />
                <div className="question-header">
                    <div
                        className="question-powerup-box cursor"
                        onClick={() => setPowerTypeFunction("hintpower")}
                    >
                        <img
                            className="question-powerup-img"
                            src={questionMarkBright}
                            alt="questionmark"
                        />
                    </div>
                    <div
                        className="question-powerup-box cursor"
                        onClick={() => setPowerTypeFunction("skippower")}
                    >
                        <img
                            className="question-powerup-img"
                            src={skip}
                            alt="similar"
                        />
                    </div>
                    <div
                        className="question-powerup-box cursor"
                        onClick={() => setPowerTypeFunction("closepower")}
                    >
                        <img
                            className="question-powerup-img"
                            src={similar}
                            alt="similar"
                        />
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

                    <Input
                        onChange={(event) => setAnswer(event.target.value)}
                        className="question-input"
                    />
                    <div>
                        <Button
                            type="primary"
                            className="question-btn cursor"
                            htmlType="submit"
                            onClick={() => setPowerTypeFunction("hintused")}
                        >
                            {hintUsed || hintPowerup ? "See hint" : "Use Hint"}
                        </Button>

                        <Button
                            type="primary"
                            className="question-btn cursor"
                            htmlType="submit"
                            onClick={onAnswer}
                        >
                            Submit
                        </Button>
                    </div>
                </div>
                <Modal
                    visible={modal}
                    onOk={handleOk2}
                    onCancel={handleCancel2}
                    okText="Yes"
                    closable={false}
                    title="    "
                    // autoFocusButton="ok"
                    okType
                    footer={null}
                >
                    <div className="modal-container">
                        {modalImage === "" ? (
                            <p />
                        ) : (
                            <img
                                src={modalImage}
                                alt=""
                                className="modal-image"
                            />
                        )}
                        <p className="modal-text">{modalText}</p>
                    </div>
                </Modal>
                <Modal
                    visible={buttonModal}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    okText="Yes"
                    closable={false}
                    title="    "
                    autoFocusButton="ok"
                    okType
                >
                    <div className="modal-container">
                        <p className="modal-text">{buttonModalText}</p>
                        {/* <p className="modal-text">{modalText}</p> */}
                    </div>
                </Modal>
            </Content>
            <Footer />
        </Layout>
    );
};

export default Question;
