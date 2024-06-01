import axios from 'axios';
import {refreshToken} from "./services/auth/login";
import {useNavigate} from "react-router-dom";
import {BASE_URL} from "./config";

const API = axios.create({
    baseURL: `${BASE_URL}/apiV1/`,
});


API.interceptors.response.use(
    response => response,
    async error => {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
            if (error.config.url === '/token/') {
                originalRequest._retry = true;
                return Promise.reject(error);
            } else {
                originalRequest._retry = true;

                try {
                    const newAccessToken = await refreshToken(); // Ваша функция для обновления токена
                    console.log(newAccessToken);
                    API.defaults.headers.common['Authorization'] = 'Bearer ' + newAccessToken;
                    return API(originalRequest); // Повторная отправка исходного запроса
                } catch (error) {
                    console.error('Unable to refresh token, logging out...', error);
                    localStorage.removeItem('accessToken');  // Удаляем недействительные токены
                    localStorage.removeItem('refreshToken');
                    const navigate = useNavigate();
                    navigate("/login")
                }
            }
        }
        return Promise.reject(error);
    }
);
export default API;