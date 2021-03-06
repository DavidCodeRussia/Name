import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "cd664a4b-8ae4-4329-af11-adaeaf1df86b"
    }
})

export const authAPI = {
    me() {
        return instance.get(`auth/me`).then(response => {
            return response.data
        })
    },
    login(email, password, rememberMe = false, captcha = "") {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha})
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data
        });
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`).then(response => {
            return response.data
        });
    },
    follow(userId) {
        return instance.post(`follow/${userId}`).then(response => {
            return response.data
        });
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status})
    },
    getPhoto(photo) {
        const formData = new FormData()
        formData.append('image', photo)
        return instance.put(`profile/photo`, formData, {
                    headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        )
    },
    saveDataProfile(profile) {
        return instance.put('profile', profile)
    }
}

export const captchaAPI = {
    getCaptcha() {
        return instance.get(`security/get-captcha-url`)
    }
}

