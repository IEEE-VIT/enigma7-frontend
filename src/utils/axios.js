import axios from "axios";

const BackendUrl = axios.create({
    baseURl: "process.env.REACT_APP_BACKEND_URL",
});

export default BackendUrl;
