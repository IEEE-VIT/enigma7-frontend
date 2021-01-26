import React from "react";
import LoginNav from "../../components/loginNav/LoginNav";
import logo from "../../images/enigma.svg";
import playstore from "../../images/playstore.svg";
import appstore from "../../images/appstore.svg";

const DownloadApp = () => {
    return (
        <div className="page timer-page-full">
            <LoginNav />
            <div className="leader">
                <img style={{ height: 250 }} src={logo} alt="enigma.svg" />
                <p className="download-text">Download the App now!</p>
                <div className="download-icons">
                    <a
                        href="https://play.google.com/store/apps/details?id=com.ieeevit.enigma7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor"
                    >
                        <img
                            style={{ width: 250, height: "auto" }}
                            src={playstore}
                            alt="playstore"
                        />
                    </a>
                    <a
                        href="https://apps.apple.com/in/app/enigma-7-0/id1534408287"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor"
                    >
                        <img
                            style={{ width: 250, height: "auto" }}
                            src={appstore}
                            alt="app store"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default DownloadApp;
