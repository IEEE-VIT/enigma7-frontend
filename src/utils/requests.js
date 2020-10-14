/* eslint-disable import/prefer-default-export */
import { api } from "./axios";

export const getLeaderboard = async () => {
    const res = await api.get("/game/leaderboard", {
        headers: {
            Authorization: process.env.TOKEN,
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
                Authorization: process.env.TOKEN,
            },
        }
    );
    return res.data;
};
