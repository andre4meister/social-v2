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

export const profileAPI = {
    getUserProfile(userId) {
        return instance.get(`profile/${userId}`)
    },
    getUserStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },

}

export const usersAPI = {
    getUsers(currentPage= 1, count = 10, friend = false) {
        return instance.get(`users?page=${currentPage}&count=${count}&friend=${friend}`)
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    }
}
export const photoAPI = {
    uploadPhoto(file) {
        return axios.post('https://api.imgbb.com/1/upload?key=b6c9353a8e5850fd36926163fd5f9c78',{file},{
            withCredentials: true,
        })
    }
}