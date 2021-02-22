import axios from "axios";

const axiosBase = () => {
    const instance = axios.create({
        baseURL: `${process.env.VUE_APP_BASE_DOMAIN}`
    });
    return instance;
}

export { axiosBase };