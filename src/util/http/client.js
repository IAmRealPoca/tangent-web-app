import axios from "axios";

const axiosBase = (headers = {}) => {
    const instance = axios.create({
        baseURL: `${process.env.VUE_APP_BASE_DOMAIN}`,
        headers: headers
    });
    return instance;
}

export { axiosBase };