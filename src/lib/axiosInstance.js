import axios from 'axios';
const baseUrl = process.env.REACT_APP_API_URL;

const axiosInstance = axios.create({
    baseURL: baseUrl,
    //headers: { 'X-Requested-With': 'XMLHttpRequest' },
    // withCredentials: true,
    transformRequest: function (data, headers) {
        const access_token = sessionStorage.getItem('access_token');
        if (access_token) {
            headers.Authorization = "Bearer " + access_token;
        }
        //console.log(baseUrl);
        return data;
    }
});

export default axiosInstance;
