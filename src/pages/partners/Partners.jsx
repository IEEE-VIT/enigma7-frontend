import { Typography } from "antd";
import React from "react";
import LoginNav from "../../components/loginNav/LoginNav";

const Partners = () => {
    return (
        <div
            className="timer-page-full page"
            style={{ overflowY: "scroll", overflowX: "hidden" }}
        >
            <LoginNav />
            <div className="partner-main">
                <Typography.Title level={2} style={{ color: "#1DB818" }}>
                    Title Sponsor
                </Typography.Title>
                <div className="partner-imgs">
                    <img
                        className="partner-img"
                        src="https://i.ibb.co/7bHt30d/Whats-App-Image-2020-11-29-at-10-24-36-PM-2.jpg"
                        alt="cn"
                    />
                </div>
                <Typography.Title level={2} style={{ color: "#1DB818" }}>
                    Sponsors
                </Typography.Title>
                <div className="partner-imgs">
                    <img
                        className="partner-img"
                        src="https://i.ibb.co/SvGzJk9/Whats-App-Image-2020-11-29-at-10-24-36-PM.jpg"
                        alt="humourbaba"
                    />
                    <img
                        className="partner-img"
                        src="https://i.ibb.co/rQSmFXK/Whats-App-Image-2020-11-29-at-10-24-36-PM-1.jpg"
                        alt="ts"
                    />
                    <img
                        className="partner-img"
                        src="https://codingblocks.com/assets/images/cb/cblogo.png"
                        alt="cb"
                    />
                    <img
                        className="partner-img"
                        src="https://i.ibb.co/3MqWDb1/interwebshost-logo-transparent.png"
                        alt="interweb"
                        style={{ width: "15rem", height: "2rem" }}
                    />
                    <img
                        className="partner-img"
                        src="https://res-3.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco/xtrdjdyccamjbg53fiyv"
                        alt="taskade"
                    />
                    <img
                        className="partner-img"
                        src="https://i.ibb.co/YWcsXmb/sashido-logo-for-sites.png"
                        alt="sashido"
                    />
                    <img
                        className="partner-img"
                        src="https://repl.it/public/images/light-logo.svg"
                        alt="replit"
                    />
                </div>
                <Typography.Title level={2} style={{ color: "#1DB818" }}>
                    Media Partners
                </Typography.Title>
                <div className="partner-imgs">
                    <a
                        href="https://instagram.com/cryptonic007?igshid=yv26fj4vudla"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            className="partner-img"
                            src="https://i.ibb.co/wK18z89/95385491-821820718227235-8683755193348653056-n.jpg"
                            alt="abc"
                        />
                    </a>
                    <a
                        href="https://instagram.com/developstack?igshid=1b6gdgooabs38"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            className="partner-img"
                            src="https://i.ibb.co/GkFMyjQ/109744900-745705912855444-3991750307331905783-n.jpg"
                            alt="abcd"
                        />
                    </a>
                    <a
                        href="https://instagram.com/lifeless.programmer?igshid=1x1xc9cympqfw"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            className="partner-img"
                            src="https://i.ibb.co/bQCzt06/97042479-934576150305875-2945987187235094528-n.jpg"
                            alt="abcde"
                        />
                    </a>
                    <a
                        href="https://instagram.com/thetechcrawler?igshid=ggsy1h5v5vn0"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            className="partner-img"
                            src="https://i.ibb.co/rGxC2bp/96848411-685412095567677-4726625515136352256-n.jpg"
                            alt="abcdef"
                        />
                    </a>
                    <a
                        href="https://instagram.com/infosec_hub?igshid=17ytuosczpvwi"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            className="partner-img"
                            src="https://i.ibb.co/vVbs5M8/96856959-606698376602799-4510190800147054592-n.jpg"
                            alt="abcdefg"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Partners;
