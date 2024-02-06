import API from './base-service';

const ImageService = {
  getAllImages: async function () {
    let result = await API.get('/images/all');
    return result.data;
  },

  uploadImage: function (fileFormData) {
    return API.post('/images/upload', fileFormData);
  },
  getPropertyImages: function(id){
    return API.get('/images/'+id);
  }
};

export default ImageService;
