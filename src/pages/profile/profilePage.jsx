import React, { useState } from "react";
import "./profile.css";
import { Layout } from "antd";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import NavBar from "../../components/navbar/navbar";
import Edit from "../../images/editIcon.png";
import Save from "../../images/saveIcon.png";
import useKeyPress from "../../hooks/useKeyPress";

const ProfilePage = () => {
    const [disableState, setDisableState] = useState(true);
    const history = useHistory();
    if (useKeyPress("Escape")) {
        history.push("/menu");
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (disableState === true) {
            setDisableState(false);
        } else if (disableState === false) {
            setDisableState(true);
        }
    };
    const setUsername = () => {
        Axios.patch(
            `${process.env.REACT_APP_BACKEND_URL}/users/me/edit`,
            {
                username: "",
            },
            {
                headers: {
                    Authorization: process.env.TOKEN,
                },
            }
        );
    };
    return (
        <Layout className="page">
            <NavBar />
            <div className="profile-content">
                <div className="profile-body">
                    <div className="profile-heading">Profile</div>
                    <div className="profile-editName profile-header">
                        Name
                        <br />
                        <input
                            type="text"
                            value={setUsername}
                            className={
                                disableState
                                    ? "input-default"
                                    : "input-highlight"
                            }
                            id="name-input"
                            disabled={disableState}
                            placeholder="UserName"
                        />
                        <button
                            type="submit"
                            onClick={handleSubmit}
                            className="edit-button"
                        >
                            <img
                                alt="Edit/Save"
                                src={disableState ? Edit : Save}
                                disabled={disableState}
                                className="edit-icon"
                            />
                        </button>
                    </div>
                    <div className="profile-header">
                        User Name:
                        <p className="profile-value">Valid UserName</p>
                    </div>
                    <div className="profile-header">
                        Email ID:
                        <p className="profile-value">xyz@gmail.com</p>
                    </div>
                    <div className="profile-header">
                        Questions Solved:
                        <p className="profile-value">12</p>
                    </div>
                    <div className="profile-header">
                        Rank:
                        <p className="profile-value">3</p>
                    </div>
                </div>
                <div className="next-page">
                    <button type="button">Press ENTER to continue</button>|
                    <button type="button">Press L to logout</button>
                </div>
            </div>
        </Layout>
    );
};
export default ProfilePage;
