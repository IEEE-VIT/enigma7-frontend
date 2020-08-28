import React, { useState } from "react";
import "./profile.css";
import { Layout } from "antd";
import NavBar from "../../components/navbar/navbar";
import Edit from "./editIcon.png";
import Save from "./saveIcon.png";

const Profile = () => {
    const [disableState, setDisableState] = useState(true);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (disableState === true) {
            setDisableState(false);
        } else if (disableState === false) {
            setDisableState(true);
        }
    };
    return (
        <Layout className="page">
            <NavBar />
            <div className="profile-content">
                <div className="profile-heading">Profile</div>
                <div className="profile-body">
                    <div className="profile-editName profile-header">
                        Name
                        <br />
                        <input
                            type="text"
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
                    <div className="profile-header ">
                        User Name:
                        <div className="profile-value">Valid UserName</div>
                    </div>
                    <div className="profile-header">
                        Email ID:
                        <div className="profile-value">xyz@gmail.com</div>
                    </div>
                    <div className="profile-header">
                        Questions Solved:
                        <div className="profile-value">12</div>
                    </div>
                    <div className="profile-header">
                        Rank:
                        <div className="profile-value">3</div>
                    </div>
                </div>
                <div className="sign-out">
                    <button type="button">Sign out</button>
                </div>
            </div>
        </Layout>
    );
};
export default Profile;
