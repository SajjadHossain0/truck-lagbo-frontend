import axios from "axios";

const API_CLINT = axios.create({
    baseURL: "http://localhost:8080/api",
    headers: {
        "Content-Type": "application/json",
    }
});

export default API_CLINT;