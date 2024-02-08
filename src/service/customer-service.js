import { ROLES } from '../constant/Roles';
import API from './base-service';


export const CustomerService = {
    getPropertiesList: async function (status) {
        let result = await API.get(`/properties`);
        return result.data;
    },
    getOffers: async function () {
        let result = await API.get(`/offers/user`);
        return result.data;
    },
}

export default CustomerService;
