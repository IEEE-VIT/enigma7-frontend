/* eslint-disable import/prefer-default-export */
import { api } from "./axios";

export const getLeaderboard = async () => {
    console.log(process.env.REACT_APP_TOKEN);
    const res = await api.get("/game/leaderboard", {
        headers: {
            Authorization: `Token ${process.env.REACT_APP_TOKEN}`,
        },
    });
    return res.data;
};

export const getUsername = async (userName) => {
    const res = await api.patch(
        "/users/me/edit/",
        {
            username: userName,
        },
        {
            headers: {
                Authorization: process.env.REACT_APP_TOKEN,
            },
        }
    );
    return res.data;
};
