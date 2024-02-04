import { API } from "./base-service"

export const UserService = {
    login: async function (data) {
        let result = await API.post("/login", data)
        return result.data;
    },
    logout: async function () {

    }
}