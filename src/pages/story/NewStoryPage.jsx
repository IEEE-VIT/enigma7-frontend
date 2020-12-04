import React, { useState, useEffect } from "react";
import "./story.css";
import { Button, Layout, notification } from "antd";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import TypeWriter from "react-typewriter";
import NavBar from "../../components/navbar/navbar";
import useKeyPress from "../../hooks/useKeyPress";
import LoadingPage from "../loadingPage/LoadingPage";

import character from "../../images/character.gif";
import isMobile from "../../utils/checkMobile";
// import { act } from "react-dom/test-utils";

const NewStoryPage = () => {
    const [story, setStory] = useState("");
    const [loadingPage, setLoadingPage] = useState(true);
    const [username, setUsername] = useState("");

    const history = useHistory();

    // eslint-disable-next-line
    useEffect(() => {
        if (isMobile()) {
            return history.push("/download");
        }
        // eslint-disable-next-line
    }, []);

    if (useKeyPress("Escape")) {
        history.push("/menu");
    }
    const key = localStorage.getItem("key");
    useEffect(() => {
        Axios.get(`${process.env.REACT_APP_BACKEND_URL}/game/story/`, {
            headers: {
                Authorization: key,
            },
        })
            .then((res) => {
                const { data } = res;
                // console.log(data);
                return data.question_story.story_text;
            })
            .then((text) => {
                // console.log(text);
                const storyTemp = text;
                Axios.get(`${process.env.REACT_APP_BACKEND_URL}/users/me/`, {
                    headers: {
                        Authorization: localStorage.getItem("key"),
                    },
                })
                    .then((res) => {
                        const { data } = res;
                        // console.log(data);
                        setUsername(data.username);
                        return data.username;
                    })
                    .then((userName) => {
                        // eslint-disable-next-line no-unused-vars
                        const storyTempp = storyTemp.replace(
                            "<username> ",
                            userName
                        );
                        const storyList = storyTempp.split("<br>");
                        const actualStory = [];
                        storyList.forEach((line) => {
                            actualStory.push(`${line}\n`);
                            // actualStory.push({ pause: 5 });
                        });
                        setStory(actualStory);
                    })
                    .then(() => {
                        setLoadingPage(false);
                    })
                    .catch((err) => {
                        console.error("error in get user", err);
                        notification.error({
                            message: "Sorry!",
                            description:
                                "Something Went Wrong, Please try again",
                            style: {
                                background: "#26df21",
                            },
                            duration: 0,
                        });
                    });
            })
            .catch((err) => {
                console.error("error in get Story", err);
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
    if (loadingPage) {
        return <LoadingPage />;
    }
    return (
        <Layout className="page new-story-page">
            <NavBar />
            <div
                className="story-content"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <img className="character" src={character} alt="" />

                <div className="story-body new-story-body">
                    <TypeWriter typing={1}>
                        <div>
                            {story.map((line) => {
                                return (
                                    <div>
                                        {line.replace("<username> ", username)}
                                    </div>
                                );
                            })}
                        </div>
                    </TypeWriter>
                </div>
                <Button
                    style={{
                        width: "150px",
                    }}
                    type="primary"
                    className="question-btn cursor"
                    onClick={() => {
                        history.push("/questions");
                    }}
                >
                    Done
                </Button>
            </div>
        </Layout>
    );
};
export default NewStoryPage;
