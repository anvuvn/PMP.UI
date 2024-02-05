import { ROLES } from "../constant/Roles";
import API from "./base-service"

export const AdminService = {
    
    getPropertyByStatus: async function (status) {
        let result = await API.get(`/properties/status/${status}`);
        return result.data;
    },
    getPropertyById: async function (id) {
        let result = await API.get(`/properties/${id}`);
        return result.data;
    },


}