/* eslint-disable import/prefer-default-export */
import { api } from "./axios";

const key = localStorage.getItem("key");

export const getUsername = async (userName) => {
    return new Promise((resolve, reject) => {
        try {
            const res = api.patch(
                "/users/me/edit/",
                {
                    username: userName,
                },
                {
                    headers: {
                        Authorization: key,
                    },
                }
            );
            resolve(res.data);
        } catch (err) {
            reject(new Error("error sending first login", err));
        }
    });
};

// eslint-disable-next-line camelcase
export const sendFirstLogin = (outreach, is_college_student, year) => {
    return new Promise((resolve, reject) => {
        try {
            const res = api.post(
                " /users/outreach/",
                {
                    outreach,
                    is_college_student,
                    year,
                },
                {
                    headers: {
                        Authorization: key,
                    },
                }
            );
            resolve(res.data);
        } catch (err) {
            reject(new Error("error sending first login", err));
        }
    });
};
