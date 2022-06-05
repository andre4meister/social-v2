import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '2db33cae-f456-4755-90ab-b9e9fb5ba545'
    }
})
export const authAPI = {
    auth() {
        return instance.get('auth/me')
    },
    login(email, password, rememberMe, captcha) {
        return instance.post('auth/login',{email, password, rememberMe, captcha})
    },
    logout() {
        return instance.delete('auth/login')
    },

}