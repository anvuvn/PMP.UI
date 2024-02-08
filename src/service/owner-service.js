import { ROLES } from '../constant/Roles';
import API from './base-service';

export const OwnerService = {
    getOfferByProperty: async function (id) {
        let result = await API.get(`/owner/properties/${id}/offers`);
       return result.data;
    }/* ,
    acceptOffer:async function(id){
       let result = await API.put(`/properties/${id}`, property);
       return result.data;
    } */
}

export default OwnerService