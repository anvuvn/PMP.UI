import { ROLES } from '../constant/Roles';
import API from './base-service';

export const OwnerService = {
    getOfferByProperty: async function (id) {
        let result = await API.get(`/owner/properties/${id}/offers`);
       return result.data;
    },
    acceptOffer:async function(offerId,data){
       let result = await API.post(`/offers/owner/${offerId}/accept`,data);
       return result.data;
    } ,
    cancelOffer:async function(offerId,data){
       let result = await API.post(`/offers/owner/${offerId}/cancel`,data);
       return result.data;
    },

}

export default OwnerService