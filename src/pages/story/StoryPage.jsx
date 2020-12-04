import React, { useState, useEffect } from "react";
import "./story.css";
import { Layout, notification } from "antd";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import NavBar from "../../components/navbar/navbar";
import useKeyPress from "../../hooks/useKeyPress";
import LoadingPage from "../loadingPage/LoadingPage";
import isMobile from "../../utils/checkMobile";

const StoryPage = () => {
    const [story, setStory] = useState([]);
    const [username, setUsername] = useState("");
    const [loadingPage, setLoadingPage] = useState(true);

    const history = useHistory();
    // eslint-disable-next-line consistent-return
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
        Axios.get(`${process.env.REACT_APP_BACKEND_URL}/game/story/complete/`, {
            headers: {
                Authorization: key,
            },
        })
            .then((res) => {
                const { data } = res;
                // console.log(data);
                data.map((storyObj) => {
                    // console.log(storyObj.question_story.story_text);
                    // eslint-disable-next-line no-shadow
                    return setStory((story) => [
                        ...story,
                        storyObj.question_story.story_text,
                    ]);
                });
                // console.log(data);
                // return console.log("story after loop", story);
                return undefined;
            })
            .then(() => {
                Axios.get(`${process.env.REACT_APP_BACKEND_URL}/users/me/`, {
                    headers: {
                        Authorization: key,
                    },
                })
                    .then((res) => {
                        const { data } = res;
                        // console.log(data);
                        // console.log("story in username", story);
                        return setUsername(data.username);
                    })
                    .then(() => {
                        // console.log("story in loading false", story);
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
                console.error("error in get story", err);
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
    console.log("story in main", story);
    if (loadingPage) {
        return <LoadingPage />;
    }
    return (
        <Layout className="page">
            <NavBar />
            <div className="story-content leader">
                <div className="story-heading"> Story </div>
                <div className="story-body">
                    {story.map((line) => {
                        return (
                            <div>
                                {line.split("<br>").map((linePart) => {
                                    return (
                                        <div>
                                            {linePart.replace(
                                                "<username> ",
                                                `${username}`
                                            )}
                                            <br />
                                            <br />
                                        </div>
                                    );
                                })}
                            </div>
                        );
                    })}
                    {/* {story.split("<br>").map((line) => {
                        return <div>{line}</div>;
                    })} */}
                </div>
            </div>
        </Layout>
    );
};
export default StoryPage;
