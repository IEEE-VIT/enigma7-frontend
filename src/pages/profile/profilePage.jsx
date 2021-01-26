import React, { useEffect, useState } from "react";
import "./profile.css";
import { Layout, notification } from "antd";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import NavBar from "../../components/navbar/navbar";
import useKeyPress from "../../hooks/useKeyPress";
import LoadingPage from "../loadingPage/LoadingPage";
import isMobile from "../../utils/checkMobile";

const ProfilePage = () => {
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [questionsAnswered, setquestionsAnswered] = useState();
    const [rank, setRank] = useState();
    const [points, setPoints] = useState();

    // loading page
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
    if (useKeyPress("l")) {
        localStorage.clear();
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    }

    useEffect(() => {
        Axios.get(`${process.env.REACT_APP_BACKEND_URL}/users/me/`, {
            headers: {
                Authorization: localStorage.getItem("key"),
            },
        })
            .then((res) => {
                const { data } = res;
                setUsername(data.username);
                setEmail(data.email);
                setquestionsAnswered(data.question_answered);
                setRank(data.rank);
                setPoints(data.points);
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
    }, []);

    if (loadingPage) {
        return <LoadingPage />;
    }

    return (
        <Layout className="page">
            <NavBar />
            <div className="profile-content">
                <div className="profile-body">
                    <div className="profile-heading">Profile</div>
                    <div className="profile-header">
                        User Name:
                        <p className="profile-value">{username}</p>
                    </div>
                    <div className="profile-header">
                        Email ID:
                        <p className="profile-value">{email}</p>
                    </div>
                    <div className="profile-header">
                        Questions Solved:
                        <p className="profile-value">{questionsAnswered}</p>
                    </div>
                    <div className="profile-header">
                        Points:
                        <p className="profile-value">{points}</p>
                    </div>
                    <div className="profile-header">
                        Rank:
                        <p className="profile-value">{rank}</p>
                    </div>
                </div>
                <div className="next-page">
                    <button className="cursor" type="button">
                        Press Esc to Go Back
                    </button>
                    |
                    <button className="cursor" type="button">
                        Press L to logout
                    </button>
                </div>
            </div>
        </Layout>
    );
};

export default ProfilePage;
